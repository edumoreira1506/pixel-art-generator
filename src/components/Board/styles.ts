import styled from 'styled-components';

import { BoardItemType } from './types';

export const StyledBoard = styled.div`
  display: flex;
  max-width: 95%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledBoardItem = styled.div`
  display: flex;
  margin: 0 4px 4px 0;

  ${({ color, size }: BoardItemType) => `
    background-color: ${color};
    width: ${size}px;
    height: ${size}px;
  `}
`;
