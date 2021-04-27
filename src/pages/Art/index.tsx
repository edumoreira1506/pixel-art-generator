import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import { toast, ToastContainer } from 'react-toastify';
import { exportComponentAsPNG } from 'react-component-export-image';
import 'react-toastify/dist/ReactToastify.css';
  
import Board from '../../components/Board';
import Loading from '../../components/Loading';
import useAuth from '../../hooks/useAuth';
import useDebouncedEffect from '../../hooks/useDebouncedEffect';
import useRouter from '../../hooks/useRouter';
import FolderService from '../../services/FolderService';
import Button from '../../components/Button';

import { StyledContainer, StyledColorPicker, StyledName, StyledBoard, StyledButton } from './styles';

export default function ArtPage(): ReactElement {
  const { params: { folderId, artId } } = useRouter();
  const [items, setItems] = useState<any>([]);
  const [name, setName] = useState('');
  const [marginBetween, setMarginBetween] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [color, setColor] = useState('black');
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuth();
  const pixelArtRef = useRef<any>();

  useEffect(() => {
    const fetchArt = async () => {
      setIsLoading(true);

      FolderService.getFolderArt(String(token), folderId, artId, {
        onSuccess: ({ art: artFromApi }) => {
          setItems(artFromApi.items);
          setName(artFromApi.name);
          setMarginBetween(artFromApi.marginBetween);
          setItemWidth(artFromApi.itemWidth);
          setIsLoading(false);
        },
        onError: error => {
          window.alert(error);
          setIsLoading(false);
        }
      });
    };

    fetchArt();
  }, [FolderService]);

  useDebouncedEffect(() => {
    const updateArt = () => {
      FolderService.updateFolderArt(String(token), folderId, artId, {
        items,
        marginBetween,
        itemWidth,
        name,
      }, {
        onError: console.log,
        onSuccess: () => toast('Progresso salvo!'),
      });
    };

    updateArt();
  }, 5000, [items]);

  const handleExportToImage = () => exportComponentAsPNG(pixelArtRef, {
    fileName: name
  });

  return (
    <StyledContainer>
      {(isLoading || !name) ? <Loading /> : (
        <>
          <StyledName>
            {name}
          </StyledName>
          <ToastContainer />
          <StyledColorPicker>
            <SketchPicker
              color={color}
              onChange={({ hex }) => setColor(hex)}
            />
          </StyledColorPicker>
          <StyledBoard ref={pixelArtRef}>
            <Board
              items={items}
              onChange={setItems}
              margin={marginBetween}
              size={itemWidth}
              color={color}
            />
          </StyledBoard>
          <StyledButton>
            <Button onClick={handleExportToImage}>
              Exportar
            </Button>
          </StyledButton>
        </>
      )}
    </StyledContainer>
  );
}
