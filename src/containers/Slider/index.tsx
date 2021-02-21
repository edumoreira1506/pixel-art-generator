import React, { ReactElement } from 'react';
import Slider from '../../components/Slider';
import { configKeys } from '../../config/constants';
import useConfig from '../../hooks/useConfig';

const SliderContainer = (): ReactElement => {
  const [amountOfItems, setAmountOfItems] = useConfig(configKeys.AMOUNT_OF_ITEMS);
  const [itemWidth, setItemWidth] = useConfig(configKeys.ITEM_WIDTH);

  return (
    <>
      <Slider label="Largura do 'pixel'" value={Number(itemWidth)} onChange={setItemWidth} />
      <Slider label="Quantidade de pixels" value={Number(amountOfItems) / 10} onChange={(newAmount: number) => setAmountOfItems(newAmount * 10)} />
    </>
  );
};

export default SliderContainer;
