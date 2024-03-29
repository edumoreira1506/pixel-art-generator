import styled from 'styled-components';
import { colors } from '../../config/constants';

export const StyledContainer = styled.div`
  margin-top: 65px;

  .lds-roller {
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
  }
`;

export const StyledColorPicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const StyledName = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  padding-bottom: 15px;
  border-bottom: solid 1px ${colors.BLACK};
`;

export const StyledBoardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBoard = styled.div`
  display: inline-flex;
`;

export const StyledButton = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  width: 50%;
  margin-bottom: 15px;
`;

export const StyledSlider = styled.div`
  width: 90%;
  margin: 0 auto;
`;
