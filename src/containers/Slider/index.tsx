import React, { ReactElement } from 'react';

import Slider from '../../components/Slider';
import { configKeys } from '../../config/constants';
import useConfig from '../../hooks/useConfig';

import { StyledSlider } from './styles';

const SliderContainer = (): ReactElement => {
  const [amountOfItems, setAmountOfItems] = useConfig(configKeys.AMOUNT_OF_ITEMS);
  const [itemWidth, setItemWidth] = useConfig(configKeys.ITEM_WIDTH);
  const [marginBetween, setMarginBetween] = useConfig(configKeys.MARGIN_BETWEEN);

  return (
    <StyledSlider>
      <Slider label="Largura do 'pixel'" value={Number(itemWidth)} onChange={setItemWidth} />
      <Slider label="Espaço entre os pixels" value={Number(marginBetween)} onChange={setMarginBetween} />
      <Slider label="Quantidade de pixels" value={Number(amountOfItems) / 10} onChange={(newAmount: number) => setAmountOfItems(newAmount * 10)} />
    </StyledSlider>
  );
};

export default SliderContainer;
