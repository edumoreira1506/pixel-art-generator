import React, { ReactElement } from 'react';

import { StyledBoard, StyledBoardItem, StyledBoardRow } from './styles';

import { BoardItemType } from './types';

type BoardPropsType = {
  items: Array<Array<BoardItemType>>;
  margin: number;
};

const Board = ({ items, margin }: BoardPropsType): ReactElement => (
  <StyledBoard>
    {items.map((columnItems, columnIndex) => 
      <StyledBoardRow key={columnIndex}>
        {columnItems.map((item, itemIndex) => (
          <StyledBoardItem
            margin={margin}
            color={item.color}
            key={`board-item-${itemIndex}-${item.color}`}
            size={item.size}
          />
        ))}
      </StyledBoardRow>
    )}
  </StyledBoard>
);

export default Board;
