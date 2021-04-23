import React, { ReactElement } from 'react';

import { StyledFolder, StyledName } from './styles';

type FolderPropsType = {
  name: string;
}

const Folder = ({ name }: FolderPropsType): ReactElement => (
  <StyledFolder>
    <StyledName>
      {name}
    </StyledName>
  </StyledFolder>
);

export default Folder;
