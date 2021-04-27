import React, { ReactElement, useCallback } from 'react';
import { HiOutlineLogout } from 'react-icons/hi';

import { APP_TITLE } from '../../config/constants';
import useAuth from '../../hooks/useAuth';
import StoreService from '../../services/StoreService';

import { StyledHeader, StyledText } from './styles';

export default function Header(): ReactElement {
  const { setToken } = useAuth();

  const handleLogout = useCallback(() => {
    setToken('');
    StoreService.clear();
  }, []);

  return (
    <StyledHeader>
      <StyledText>{APP_TITLE}</StyledText>
      <HiOutlineLogout onClick={handleLogout} />
    </StyledHeader>
  );
}
