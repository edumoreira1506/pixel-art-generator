import React, { ReactElement, useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';

import Board from '../../components/Board';
import Loading from '../../components/Loading';
import useAuth from '../../hooks/useAuth';
import useRouter from '../../hooks/useRouter';
import FolderService from '../../services/FolderService';

import { StyledContainer } from './styles';

export default function ArtPage(): ReactElement {
  const { params: { folderId, artId } } = useRouter();
  const [items, setItems] = useState<any>([]);
  const [name, setName] = useState('');
  const [marginBetween, setMarginBetween] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [color, setColor] = useState('black');
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuth();

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

  return (
    <StyledContainer>
      {(isLoading || !name) ? <Loading /> : (
        <>
          <div>
            <SketchPicker
              color={color}
              onChange={({ hex }) => setColor(hex)}
            />
          </div>
          <Board
            items={items}
            onChange={setItems}
            margin={marginBetween}
            size={itemWidth}
            color={color}
          />
        </>
      )}
    </StyledContainer>
  );
}
