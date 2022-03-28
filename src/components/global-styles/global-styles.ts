import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    min-height: 100vh;
    width: 100%;
  }
  #root {
    min-width: 100%;
    min-height: 100vh;

    @media screen and (max-width: 390px) {
      width: 100%;
    }
  }
`;

export default GlobalStyles;