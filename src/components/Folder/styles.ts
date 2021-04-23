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
  margin: 0;
  padding-left: 15px;
`;
