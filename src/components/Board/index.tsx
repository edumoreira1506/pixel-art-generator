import React, { ReactElement } from 'react';

import { StyledBoard, StyledBoardItem } from './styles';

import { BoardItemType } from './types';

type BoardPropsType = {
  items: Array<BoardItemType>;
  margin: number;
};

const Board = ({ items, margin }: BoardPropsType): ReactElement => (
  <StyledBoard>
    {items.map((item, itemIndex) => (
      <StyledBoardItem
        margin={margin}
        color={item.color}
        key={`board-item-${itemIndex}-${item.color}`}
        size={item.size}
      />
    ))}
  </StyledBoard>
);

export default Board;
