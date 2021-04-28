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
import Slider from '../../components/Slider';

import { StyledContainer, StyledColorPicker, StyledName, StyledBoard, StyledButton, StyledSlider } from './styles';

export default function ArtPage(): ReactElement {
  const { params: { folderId, artId } } = useRouter();
  const [items, setItems] = useState<Array<Array<string>>>([]);
  const [name, setName] = useState<string>('');
  const [marginBetween, setMarginBetween] = useState<number>(0);
  const [itemWidth, setItemWidth] = useState<number>(0);
  const [color, setColor] = useState<string>('black');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showConfig, setShowConfig] = useState<boolean>(false);
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
        onSuccess: () => toast('Saved!'),
      });
    };

    updateArt();
  }, 5000, [items, marginBetween, itemWidth, name, folderId, artId, token]);

  const handleExportToImage = () => exportComponentAsPNG(pixelArtRef, {
    fileName: name
  });

  const handleToggleConfig = () => setShowConfig(!showConfig);

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
          <StyledButton>
            <Button onClick={handleToggleConfig}>
              {showConfig ? 'Save' : 'Edit'} config
            </Button>
          </StyledButton>
          {showConfig && (
            <StyledSlider>
              <Slider label="Largura do 'pixel'" value={Number(itemWidth)} onChange={setItemWidth} />
              <Slider label="Espaço entre os pixels" value={Number(marginBetween)} onChange={setMarginBetween} />
            </StyledSlider>
          )}
        </>
      )}
    </StyledContainer>
  );
}
