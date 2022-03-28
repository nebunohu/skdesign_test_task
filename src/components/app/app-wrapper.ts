import styled from 'styled-components';

const AppWrapper = styled.div`
  

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
  min-height: 100vh;
  font-family: 'Open Sans';

  @media screen and (max-width: 390px) {
    flex-direction: column;
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
  }
`;

export default AppWrapper;