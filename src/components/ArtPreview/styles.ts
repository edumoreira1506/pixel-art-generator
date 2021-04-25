import styled from 'styled-components';
import { colors, DEFAULT_RADIUS } from '../../config/constants';

export const StyledContainer = styled.div`
  width: 100%;
  background-color: ${colors.GREY};
  color: ${colors.BLACK};
  border-radius: ${DEFAULT_RADIUS}px;
  transition: all 0.5s ease;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.08);
  border: solid 1px ${colors.BLACK};

  &:hover {
    transform: translateY(-2px);
  }
`;

export const StyledTitle = styled.div`
  font-weight: bold;
  text-align: center;
  border-bottom: solid 1px ${colors.BLACK};
  padding-bottom: 2px;
`;

export const StyledName = styled.p`
  margin: 0;
  padding: 8px 0;
`;

export const StyledColors = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
`;

export const StyledColor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: white;
  font-weight: bold;
  border-radius: ${DEFAULT_RADIUS}px;

  ${({ color }) => `
    background-color: ${color};
  `}
`;
