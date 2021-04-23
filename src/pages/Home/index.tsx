import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import FolderService from '../../services/FolderService';
import Loading from '../../components/Loading';
import Folder from '../../components/Folder';
import { routes } from '../../config/constants';

import { StyledArt, StyledContainer, StyledFolder, StyledFolders } from './styles';

export default function HomePage(): ReactElement {
  const [folders, setFolders] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [arts, setArts] = useState<any>({ cache: {}, current: null, isLoading: null });
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

  return (
    <StyledContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledFolders>
          {folders.map((folder: any, index: number) => (
            <StyledFolder key={folder.id} onClick={() => handleToggleFolderArts(index)}>
              <Folder name={folder.name}>
                {arts?.isLoading === folder.id && <Loading />}
                {folder.id === arts?.current?.folderId && (
                  <>
                    {arts?.current?.arts.map((art: any) => (
                      <StyledArt key={art.id}>
                        <Link to={routes.ART(art.id)}>
                          {art.name}
                        </Link>
                      </StyledArt>
                    ))}
                  </>
                )}
              </Folder>
            </StyledFolder>
          ))}
        </StyledFolders>
      )}
    </StyledContainer>
  );
}
