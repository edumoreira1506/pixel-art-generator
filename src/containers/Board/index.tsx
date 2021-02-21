import React, { ReactElement } from 'react';
import Board from '../../components/Board';
import { configKeys } from '../../config/constants';
import useConfig from '../../hooks/useConfig';

const BoardContainer = (): ReactElement => {
  const [amountOfItems] = useConfig(configKeys.AMOUNT_OF_ITEMS);
  const [itemWidth] = useConfig(configKeys.ITEM_WIDTH);

  return (
    <Board items={Array(amountOfItems).fill({ color: 'red', size: itemWidth })} />
  );
};

export default BoardContainer;
