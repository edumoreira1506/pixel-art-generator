import React, { ReactElement, useEffect, useState } from 'react';
import Board from '../../components/Board';
import { configKeys } from '../../config/constants';
import useConfig from '../../hooks/useConfig';

const setupColors = (rows: number, columns: number, color: string) => Array(rows).fill(Array(columns).fill(color));

const BoardContainer = (): ReactElement => {
  const [columns] = useConfig(configKeys.COLUMNS);
  const [itemWidth] = useConfig(configKeys.ITEM_WIDTH);
  const [marginBetween] = useConfig(configKeys.MARGIN_BETWEEN);
  const [color] = useConfig(configKeys.COLOR);
  const [rows] = useConfig(configKeys.ROWS);
  const [items, setItems] = useState(setupColors(rows, columns, color));

  useEffect(() => {
    setItems(setupColors(rows, columns, color));
  }, [rows, columns]);

  return (
    <Board
      items={items}
      onChange={setItems}
      margin={marginBetween}
      size={itemWidth}
      color={color}
    />
  );
};

export default BoardContainer;
