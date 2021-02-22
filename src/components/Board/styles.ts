import styled from 'styled-components';

export const StyledBoard = styled.ul`
  display: flex;
  pdding: 0;
  list-style: none;
  max-width: 95%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
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
`;
