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

import { StyledContainer, StyledColorPicker, StyledName, StyledBoard, StyledButton, StyledSlider, StyledBoardContainer } from './styles';

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
    fileName: name,
    html2CanvasOptions: {
      scrollX: -window.scrollX + 2,
      scrollY: -window.scrollY + 2,
      width: pixelArtRef.current.offsetWidth + 4,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight
    }
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
          <StyledBoardContainer>
            <StyledBoard ref={pixelArtRef}>
              <Board
                items={items}
                onChange={setItems}
                margin={marginBetween}
                size={itemWidth}
                color={color}
              />
            </StyledBoard>
          </StyledBoardContainer>
          <StyledButton>
            <Button onClick={handleExportToImage}>
              Export
            </Button>
          </StyledButton>
          <StyledButton>
            <Button onClick={handleToggleConfig}>
              {showConfig ? 'Save' : 'Edit'} config
            </Button>
          </StyledButton>
          {showConfig && (
            <StyledSlider>
              <Slider label="Pixel size" value={Number(itemWidth)} onChange={setItemWidth} />
              <Slider label="Space between the pixels" value={Number(marginBetween)} onChange={setMarginBetween} />
            </StyledSlider>
          )}
        </>
      )}
    </StyledContainer>
  );
}
