import styled from 'styled-components';

import { colors } from '../../config/constants';

export const StyledHeader = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  padding: 8px 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
    padding-right: 5%;
  }
`;

export const StyledText = styled.p`
  margin: 0;
  padding-left: 5%;
  text-align: left;

  a {
    color: inherit;
    text-decoration: none;
  }
`;
