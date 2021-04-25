import styled from 'styled-components';

export const StyledContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledFolders = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 90%;
  min-height: 90%;
`;

export const StyledFolder = styled.li`
  width: 100%;
  margin-bottom: 15px;
  position: relative;

  .lds-roller {
    transform: scale(0.2);
    right: 10px;
    top: -12px;
    position: absolute;
  }
`;

export const StyledArt = styled.div`
  width: 95%;
  margin-bottom: 10px;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const StyledArts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledNewFolderButton = styled.div`
  height: 8%;
  margin-top: 5px;
  width: 90%;
`;
