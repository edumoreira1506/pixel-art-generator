import React, { ReactElement, useCallback, useEffect, useState } from 'react';

import useAuth from '../../hooks/useAuth';
import FolderService from '../../services/FolderService';
import { StyledContainer, StyledFolder, StyledFolders } from './styles';
import Loading from '../../components/Loading';
import Folder from '../../components/Folder';

export default function HomePage(): ReactElement {
  const [folders, setFolders] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [arts, setArts] = useState<any>({ cache: {}, current: null });
  const { token } = useAuth();

  useEffect(() => {
    setIsLoading(true);

    FolderService.index(String(token), {
      onSuccess: (data) => {
        setFolders(data.folders.map((folder: any) => ({ ...folder, expanded: false })));
        setIsLoading(false);
      },
      onError: error => {
        window.alert(error);
        setIsLoading(false);
      }
    });
  }, []);

  const handleToggleFolderArts = useCallback(async (index) => {
    const folder = folders[index];
    const folderId = folder.id;
    const cachedArts = arts.cache[folderId];

    if (cachedArts) {
      setArts((prevArts: any) => ({
        ...prevArts,
        current: cachedArts
      }));
    } else {
      FolderService.getFolderArts(String(token), folderId, {
        onError: window.alert,
        onSuccess: (data) => setArts((prevArts: any) => ({
          ...prevArts,
          cache: {
            ...prevArts.cache,
            [folderId]: data.arts
          }
        }))
      });
    }
  }, [folders, arts]);

  return (
    <StyledContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledFolders>
          {folders.map((folder: any, index: number) => (
            <StyledFolder key={folder.id} onClick={() => handleToggleFolderArts(index)}>
              <Folder name={folder.name} />
            </StyledFolder>
          ))}
        </StyledFolders>
      )}
    </StyledContainer>
  );
}
