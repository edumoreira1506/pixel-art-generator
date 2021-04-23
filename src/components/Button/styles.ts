import styled from 'styled-components';

import { colors, DEFAULT_RADIUS } from '../../config/constants';

export const StyledButton = styled.button`
  width: 100%;
  height: 31px;
  border-radius: ${DEFAULT_RADIUS}px;
  border: solid 1px ${colors.GREY};
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;
