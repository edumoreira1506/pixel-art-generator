import styled from 'styled-components';

import { colors, DEFAULT_RADIUS } from '../../config/constants';

export const StyledContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.BLACK};
`;

export const StyledWrapper = styled.div`
  width: 80%;
  background-color: ${colors.WHITE};
  height: 40%;
  border-radius: ${DEFAULT_RADIUS}px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 35%;
    height: 30%;
  }
`;

export const StyledForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 85%;
  }
`;

export const StyledField = styled.div`
  margin-bottom: 15px;
  width: 100%;

  .lds-roller {
    transform: scale(0.2);
  }
`;
