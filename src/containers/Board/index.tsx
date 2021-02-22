import React, { ReactElement } from 'react';
import Board from '../../components/Board';
import { configKeys } from '../../config/constants';
import useConfig from '../../hooks/useConfig';

const BoardContainer = (): ReactElement => {
  const [columns] = useConfig(configKeys.COLUMNS);
  const [itemWidth] = useConfig(configKeys.ITEM_WIDTH);
  const [marginBetween] = useConfig(configKeys.MARGIN_BETWEEN);
  const [rows] = useConfig(configKeys.ROWS);

  return (
    <Board
      items={
        Array(rows).fill(Array(columns).fill({
          color: 'red',
          size: itemWidth
        }))
      }
      margin={marginBetween}
    />
  );
};

export default BoardContainer;
