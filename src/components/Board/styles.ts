import styled from 'styled-components';

export const StyledBoard = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0 auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

type StyledBoardItemType = {
  color: string;
  size: number;
  margin: number;
}

export const StyledBoardItem = styled.li`
  display: flex;
  list-style: none;
  padding: 0;

  ${({ color, size, margin }: StyledBoardItemType) => `
    background-color: ${color};
    margin: 0 ${margin}px ${margin}px 0;
    width: ${size}px;
    height: ${size}px;
  `}

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledBoardRow = styled.div`
  width: auto;
  display: flex;
`;
