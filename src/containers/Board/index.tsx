import React, { ReactElement } from 'react';
import Board from '../../components/Board';
import { configKeys } from '../../config/constants';
import useConfig from '../../hooks/useConfig';

const BoardContainer = (): ReactElement => {
  const [columns] = useConfig(configKeys.COLUMNS);
  const [itemWidth] = useConfig(configKeys.ITEM_WIDTH);
  const [marginBetween] = useConfig(configKeys.MARGIN_BETWEEN);

  return (
    <Board
      items={
        Array(columns).fill(Array(columns).fill({
          color: 'red',
          size: itemWidth
        }))
      }
      margin={marginBetween}
    />
  );
};

export default BoardContainer;
