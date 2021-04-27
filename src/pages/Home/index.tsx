import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import FolderService from '../../services/FolderService';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import Folder from '../../components/Folder';
import { routes } from '../../config/constants';
import ArtPreview from '../../components/ArtPreview';
import useRouter from '../../hooks/useRouter';
import { ArtType } from '../../@types/art';
import { FolderType } from '../../@types/folder';

import { StyledNewArtButton, StyledArt, StyledContainer, StyledFolder, StyledFolders, StyledArts, StyledNewFolderButton } from './styles';

export default function HomePage(): ReactElement {
  const [folders, setFolders] = useState<Array<FolderType>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [arts, setArts] = useState<any>({ cache: {}, current: null, isLoading: null });
  const { token } = useAuth();
  const { setRoute } = useRouter();

  const handleFetchFolders = useCallback(() => {
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
  }, [FolderService]);

  useEffect(() => {
    handleFetchFolders();
  }, [handleFetchFolders]);

  const handleToggleFolderArts = useCallback(async (index) => {
    const folder = folders[index];
    const folderId = String(folder.id);
    const cachedArts = arts.cache[folderId];

    if (cachedArts) {
      setArts((prevArts: any) => ({
        ...prevArts,
        current: {
          folderId,
          arts: cachedArts
        }
      }));
    } else {
      setArts((prevArts: any) => ({
        ...prevArts,
        isLoading: folderId
      }));
      
      FolderService.getFolderArts(String(token), folderId, {
        onError: window.alert,
        onSuccess: (data) => setArts((prevArts: any) => ({
          current: {
            folderId,
            arts: data.arts
          },
          cache: {
            ...prevArts.cache,
            [folderId]: data.arts
          },
          isLoading: null
        }))
      });
    }
  }, [folders, arts]);

  const handleAddNewFolder = useCallback(() => {
    const newFolderName = window.prompt('Qual o nome da nova pasta?');

    FolderService.store(String(token), String(newFolderName), {
      onSuccess: handleFetchFolders,
      onError: error => window.alert(error)
    });
  }, [FolderService]);

  const handleAddNewArt = useCallback(() => setRoute(routes.NEW_ART), [setRoute]);

  const handleEditFolder = useCallback((folderId: string, newName: string) => {
    FolderService.update(String(token), newName, folderId, {
      onSuccess: handleFetchFolders,
      onError: error => window.alert(error)
    });
  }, [FolderService]);

  const handleRemoveFolder = useCallback((folderId: string) => {
    FolderService.remove(String(token), folderId, {
      onSuccess: handleFetchFolders,
      onError: error => window.alert(error)
    });
  }, [FolderService]);

  return (
    <StyledContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <StyledFolders>
            {folders.map((folder: FolderType, index: number) => (
              <StyledFolder key={folder.id} onClick={() => handleToggleFolderArts(index)}>
                <Folder id={String(folder.id)} name={folder.name} onEdit={handleEditFolder} onDelete={handleRemoveFolder}>
                  {arts?.isLoading === folder.id && <Loading />}
                  {folder.id === arts?.current?.folderId && (
                    <StyledArts>
                      {arts?.current?.arts.map((art: ArtType) => (
                        <StyledArt key={art.id}>
                          <Link to={routes.ART(String(folder.id), String(art.id))}>
                            <ArtPreview {...art} />
                          </Link>
                        </StyledArt>
                      ))}
                    </StyledArts>
                  )}
                </Folder>
              </StyledFolder>
            ))}
          </StyledFolders>
          <StyledNewFolderButton>
            <Button onClick={handleAddNewFolder}>
              Nova pasta
            </Button>
          </StyledNewFolderButton>
          <StyledNewArtButton>
            <Button onClick={handleAddNewArt}>
              Nova arte
            </Button>
          </StyledNewArtButton>
        </>
      )}
    </StyledContainer>
  );
}
