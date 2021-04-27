import React, { Dispatch, ReactElement, SetStateAction, useEffect, useRef, useState } from 'react';

import { StyledBoard, StyledBoardItem, StyledBoardRow } from './styles';

type BoardPropsType = {
  items: Array<Array<string>>;
  margin: number;
  onChange?: Dispatch<SetStateAction<any[]>>;
  size: number;
  color: string;
};

export default function Board({ items, margin, onChange, size, color }: BoardPropsType): ReactElement {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const boardRef = useRef<any>();

  const setUserIsDrawing = () => setIsDrawing(true);
  const setUserIsNotDrawing = () => setIsDrawing(false);

  const handleChangeItemColor = (row: number, column: number) => {
    if (!onChange) return;

    onChange((prevItems: Array<Array<string>>) => prevItems.map((rowItem: Array<string>, rowIndex: number) => rowIndex === row ? (
      rowItem.map((columnItem: string, columnIndex: number) => columnIndex === column ? color: columnItem)
    ) : ([ ...rowItem ])));
  };

  const handleDraw = (e: any) => {
    if (!isDrawing || !boardRef || !boardRef.current) return;

    const { clientX, clientY } = e;
    const { left, right, bottom, top } = boardRef.current.getBoundingClientRect();
    const isOutOfBoard = (
      (clientX > right || clientX < left) ||
      (clientY < top || clientY > bottom)
    );

    if (isOutOfBoard) return;

    const marginSize = items.length * margin;
    const row = Math.round(Number(clientY - top + marginSize) / size) - 1;
    const column = Math.round(Number(clientX - left + marginSize) / size) - 1;

    handleChangeItemColor(row, column);
  };

  useEffect(() => {
    document.body.addEventListener('mouseup', setUserIsNotDrawing);

    return () => document.body.removeEventListener('mouseup', setUserIsNotDrawing);
  });

  return (
    <StyledBoard ref={boardRef} onMouseDown={setUserIsDrawing} onMouseOver={handleDraw}>
      {items.map((columnItems, columnIndex) => 
        <StyledBoardRow key={columnIndex}>
          {columnItems.map((item, itemIndex) => (
            <StyledBoardItem
              onClick={() => handleChangeItemColor(columnIndex, itemIndex)}
              margin={margin}
              color={item}
              key={`board-item-${itemIndex}-${item}`}
              size={size}
            />
          ))}
        </StyledBoardRow>
      )}
    </StyledBoard>
  );
}
