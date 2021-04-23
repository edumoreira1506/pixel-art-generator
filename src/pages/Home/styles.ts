import styled from 'styled-components';
import { colors } from '../../config/constants';

export const StyledContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFolders = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 90%;
  min-height: 100%;
  padding-top: 35px;
`;

export const StyledFolder = styled.li`
  width: 100%;
  margin-bottom: 15px;
  position: relative;

  .lds-roller {
    transform: scale(0.2);
    right: 0;
    top: 0;
    position: absolute;
  }
`;

export const StyledArt = styled.div`
  margin-left: 30px;
  border-left: solid 10px ${colors.BLACK};
  padding-left: 10px;
  transition: border-left 0.5s ease;

  &:hover {
    border-left: solid 20px ${colors.BLACK};
  }

  a {
    color: black;
    text-decoration: none;
  }
`;
