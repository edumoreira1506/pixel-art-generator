import React, { ReactElement, ReactNode } from 'react';

import { StyledButton } from './styles';

type ButtonType = {
  children: ReactNode;
  onClick: (e: any) => void;
}

const Button = ({ children, onClick }: ButtonType): ReactElement => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
