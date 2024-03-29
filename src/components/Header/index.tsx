import React, { ReactElement, useCallback } from 'react';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { APP_TITLE, routes } from '../../config/constants';
import useAuth from '../../hooks/useAuth';
import StorageService from '../../services/StorageService';

import { StyledHeader, StyledText } from './styles';

export default function Header(): ReactElement {
  const { setToken } = useAuth();

  const handleLogout = useCallback(() => {
    setToken('');
    StorageService.clear();
  }, []);

  return (
    <StyledHeader>
      <StyledText>
        <Link to={routes.HOME}>
          {APP_TITLE}
        </Link>
      </StyledText>
      <HiOutlineLogout onClick={handleLogout} />
    </StyledHeader>
  );
}
