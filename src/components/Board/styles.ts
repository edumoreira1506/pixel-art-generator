import styled from 'styled-components';

export const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledBoardItem = styled.div`
  display: flex;
  width: 50px;
  height: 50px;

  ${({ color }) => `
    background-color: ${color};
  `}
`;
