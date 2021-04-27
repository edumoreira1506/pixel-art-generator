import React, { ReactElement, useEffect, useState } from 'react';
import Board from '../../components/Board';
import { configKeys } from '../../config/constants';
import useConfig from '../../hooks/useConfig';
import { createItems } from '../../utils/art';

const PreviewContainer = (): ReactElement => {
  const [columns] = useConfig(configKeys.COLUMNS);
  const [itemWidth] = useConfig(configKeys.ITEM_WIDTH);
  const [marginBetween] = useConfig(configKeys.MARGIN_BETWEEN);
  const [color] = useConfig(configKeys.COLOR);
  const [rows] = useConfig(configKeys.ROWS);
  const [items, setItems] = useState(createItems(rows, columns));

  useEffect(() => {
    setItems(createItems(rows, columns));
  }, [rows, columns]);

  return (
    <Board
      items={items}
      margin={marginBetween}
      size={itemWidth}
      color={color}
    />
  );
};

export default PreviewContainer;
