import React, { ReactElement, ReactNode } from 'react';

import { StyledBox } from './styles';

type BoxPropsType = {
  children: ReactNode;
};

const Box = ({ children }: BoxPropsType): ReactElement => (
  <StyledBox>
    {children}
  </StyledBox>
);

export default Box;
