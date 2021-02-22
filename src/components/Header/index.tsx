import React, { ReactElement } from 'react';

import { APP_TITLE } from '../../config/constants';

import { StyledHeader } from './styles';

const Header = (): ReactElement => (
  <StyledHeader>{APP_TITLE}</StyledHeader>
);

export default Header;
