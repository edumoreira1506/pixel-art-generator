import styled from 'styled-components';

export const StyledContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
`;

export const StyledFolders = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 90%;
  height: 80%;
  overflow: hidden auto;
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

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const StyledArts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: space-around;
    align-items: stretch;
  }
`;

export const StyledNewFolderButton = styled.div`
  margin-top: 2px;
  width: 90%;
`;

export const StyledNewArtButton = styled.div`
  margin-top: 2px;
  width: 90%;
`;
