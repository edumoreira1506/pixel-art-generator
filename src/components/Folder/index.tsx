import React, { ReactElement, ReactNode } from 'react';

import { StyledFolder, StyledName } from './styles';

type FolderPropsType = {
  name: string;
  children: ReactNode;
}

const Folder = ({ name, children }: FolderPropsType): ReactElement => (
  <StyledFolder>
    <StyledName>
      {name}
    </StyledName>
    {children}
  </StyledFolder>
);

export default Folder;
