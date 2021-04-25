import styled from 'styled-components';

import { colors, DEFAULT_RADIUS } from '../../config/constants';

export const StyledFolder = styled.div`
  width: 100%;
  border: solid 1px ${colors.GREY};
  border-radius: ${DEFAULT_RADIUS}px;
  padding: 15px 0;
  cursor: pointer;
`;

export const StyledName = styled.p`
  margin: 0 auto;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;

  svg {
    margin-right: 8px;
  }
`;