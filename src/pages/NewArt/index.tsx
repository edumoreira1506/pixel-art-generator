import React, { ReactElement, useCallback, useState } from 'react';
import { ArtType } from '../../@types/art';

import Box from '../../components/Box';
import { routes } from '../../config/constants';
import PreviewContainer from '../../containers/Preview';
import ConfigContainer from '../../containers/Config';
import { ConfigProvider } from '../../contexts/config';
import useAuth from '../../hooks/useAuth';
import useRouter from '../../hooks/useRouter';
import FolderService from '../../services/FolderService';

import { StyledTitle, StyledBoard, StyledSubtitle } from './styles';

export default function NewArtPage(): ReactElement {
  const [isLoading, setIsLoading] = useState(false);
  const { setRoute } = useRouter();
  const { token } = useAuth();

  const handleCreateArt = useCallback((art: ArtType, folder: string) => {
    setIsLoading(true);

    FolderService.registerArt(String(token), folder, art, {
      onError: errors => {
        window.alert(errors);
        setIsLoading(false);
      },
      onSuccess: ({ art }) => {
        setIsLoading(false);
        setRoute(routes.ART(folder, art.id));
      }
    });
  }, [FolderService, token]);

  return (
    <ConfigProvider>
      <Box>
        <StyledTitle>Configurações da nova arte</StyledTitle>
        <ConfigContainer isLoading={isLoading} onSave={handleCreateArt} />
        <StyledSubtitle>Preview:</StyledSubtitle>
        <StyledBoard>
          <PreviewContainer />
        </StyledBoard>
      </Box>
    </ConfigProvider>
  );
}
