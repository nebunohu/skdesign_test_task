import { createGlobalStyle } from "styled-components";
// @ts-ignore
import OpenSansTtf from '../../fonts/OpenSans.ttf';
// @ts-ignore
import SfUiDisplay from '../../fonts/sfuidisplay_bold.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Open Sans";
    src: url(${OpenSansTtf}) format('truetype');
  }

  @font-face {
    font-family: "SF UI Display";
    src: url(${SfUiDisplay});
  }
`;

export default FontStyles;