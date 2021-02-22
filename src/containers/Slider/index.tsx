import React, { ReactElement } from 'react';

import Slider from '../../components/Slider';
import { configKeys } from '../../config/constants';
import useConfig from '../../hooks/useConfig';

import { StyledSlider } from './styles';

const SliderContainer = (): ReactElement => {
  const [columns, setColumns] = useConfig(configKeys.COLUMNS);
  const [itemWidth, setItemWidth] = useConfig(configKeys.ITEM_WIDTH);
  const [marginBetween, setMarginBetween] = useConfig(configKeys.MARGIN_BETWEEN);

  return (
    <StyledSlider>
      <Slider label="Largura do 'pixel'" value={Number(itemWidth)} onChange={setItemWidth} />
      <Slider label="Espaço entre os pixels" value={Number(marginBetween)} onChange={setMarginBetween} />
      <Slider label="Colunas" value={Number(columns)} onChange={setColumns} />
    </StyledSlider>
  );
};

export default SliderContainer;
