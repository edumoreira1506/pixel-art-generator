import styled from 'styled-components';

import { BoardItemType } from './types';

export const StyledBoard = styled.ul`
  display: flex;
  pdding: 0;
  list-style: none;
  max-width: 95%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledBoardItem = styled.li`
  display: flex;
  margin: 0 4px 4px 0;
  list-style: none;
  padding: 0;

  ${({ color, size }: BoardItemType) => `
    background-color: ${color};
    width: ${size}px;
    height: ${size}px;
  `}
`;
