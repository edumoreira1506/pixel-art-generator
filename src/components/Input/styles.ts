import styled from 'styled-components';

import { colors, DEFAULT_RADIUS } from '../../config/constants';

export const StyledInput = styled.input`
  width: 100%;
  height: 28px;
  border-radius: ${DEFAULT_RADIUS}px;
  border: solid 1px ${colors.GREY};

  &:focus {
    outline: none;
  }
`;
