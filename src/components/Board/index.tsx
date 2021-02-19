import React, { ReactElement } from 'react';

import { StyledBoard, StyledBoardItem } from './styles';

import { BoardItemType } from './types';

type BoardPropsType = {
  items: Array<BoardItemType>
};

const Board = ({ items }: BoardPropsType): ReactElement => (
  <StyledBoard>
    {items.map((item, itemIndex) => (
      <StyledBoardItem
        color={item.color}
        key={`board-item-${itemIndex}-${item.color}`}
      />
    ))}
  </StyledBoard>
);

export default Board;
