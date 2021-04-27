import React, { ReactElement, ReactNode, useCallback } from 'react';
import { AiFillFolderOpen, AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { StyledActions, StyledFolder, StyledName, StyledAction } from './styles';

type FolderPropsType = {
  name: string;
  children: ReactNode;
  onEdit: (folderId: string, newName: string) => void;
  onDelete: (folderId: string) => void;
  id: string;
}

export default function Folder({ name, children, onEdit, onDelete, id }: FolderPropsType): ReactElement {
  const handleEdit = useCallback((e: any) => {
    e.stopPropagation();

    const newName = window.prompt('What is the new name of folder?');

    onEdit(id, String(newName));
  }, [onEdit]);

  const handleDelete = useCallback((e: any) => {
    e.stopPropagation();

    const canDelete = window.confirm('Confirm delete?');

    if (canDelete) {
      onDelete(id);
    }
  }, [onDelete]);

  return (
    <StyledFolder>
      <StyledName>
        <AiFillFolderOpen />
        {name}
      </StyledName>
      {children}
  
      <StyledActions>
        <StyledAction data-testid="edit-folder" onClick={handleEdit}>
          <AiFillEdit />
        </StyledAction>
        <StyledAction data-testid="delete-folder" onClick={handleDelete}>
          <AiFillDelete />
        </StyledAction>
      </StyledActions>
    </StyledFolder>
  );
}
