import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';

import Slider from '../../components/Slider';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { configKeys } from '../../config/constants';
import useConfig from '../../hooks/useConfig';
import FolderService from '../../services/FolderService';
import useAuth from '../../hooks/useAuth';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { ArtType } from '../../@types/art';
import { createItems } from '../../utils/art';

import { StyledSlider, StyledField } from './styles';

type ConfigContainerPropsType = {
  isLoading?: boolean;
  onSave: (art: ArtType, folderId: string) => void;
}

const ConfigContainer = ({ isLoading, onSave }: ConfigContainerPropsType): ReactElement => {
  const [columns, setColumns] = useConfig(configKeys.COLUMNS);
  const [itemWidth, setItemWidth] = useConfig(configKeys.ITEM_WIDTH);
  const [marginBetween, setMarginBetween] = useConfig(configKeys.MARGIN_BETWEEN);
  const [rows, setRows] = useConfig(configKeys.ROWS);
  const [name, setName] = useConfig(configKeys.NAME);
  const [folder, setFolder] = useConfig(configKeys.FOLDER);
  const [folders, setFolders] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchFolders = async () => {
      FolderService.index(String(token), {
        onError: error => window.alert(error),
        onSuccess: ({ folders: foldersApi }) => {
          setFolders(foldersApi);
        }
      });
    };

    fetchFolders();
  }, []);

  const foldersOptions = useMemo(() => folders.map(({ id, name }) => ({
    label: name,
    value: id,
  })), [folders]);

  const handleSaveConfig = useCallback(() => {
    if (!folder) window.alert('Pasta é obrigatório');

    onSave({
      name,
      itemWidth,
      marginBetween,
      items: createItems(rows, columns)
    }, folder);
  }, [name, itemWidth, marginBetween, rows, columns, folder]);

  return (
    <StyledSlider>
      <Slider label="Largura do 'pixel'" value={Number(itemWidth)} onChange={setItemWidth} />
      <Slider label="Espaço entre os pixels" value={Number(marginBetween)} onChange={setMarginBetween} />
      <Slider label="Colunas" value={Number(columns)} onChange={setColumns} />
      <Slider label="Linhas" value={Number(rows)} onChange={setRows} />
      <StyledField>
        <Input placeholder="Nome da arte" type="text" required value={name} onChange={setName} />
      </StyledField>
      <StyledField>
        <Select placeholder="Pasta da arte" onChange={setFolder} options={foldersOptions} value={folder} />
      </StyledField>
      <StyledField>
        <Button onClick={handleSaveConfig}>
          {isLoading ? <Loading /> : 'Salvar'}
        </Button>
      </StyledField>
    </StyledSlider>
  );
};

export default ConfigContainer;
