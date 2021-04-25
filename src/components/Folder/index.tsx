import React, { ReactElement, ReactNode } from 'react';
import { AiFillFolderOpen } from 'react-icons/ai';

import { StyledFolder, StyledName } from './styles';

type FolderPropsType = {
  name: string;
  children: ReactNode;
}

const Folder = ({ name, children }: FolderPropsType): ReactElement => (
  <StyledFolder>
    <StyledName>
      <AiFillFolderOpen />
      {name}
    </StyledName>
    {children}
  </StyledFolder>
);

export default Folder;
