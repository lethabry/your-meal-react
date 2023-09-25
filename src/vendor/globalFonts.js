import { createGlobalStyle } from 'styled-components';
import nunitoExtraBold from './fonts/Nunito-ExtraBold.ttf';
import nunitoSemiBold from './fonts/Nunito-SemiBold.ttf';
import nunitoRegular from './fonts/Nunito-Regular.ttf';

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Nunito';
  src: url(${nunitoExtraBold}) format('truetype');
  font-weight: 800;
}
@font-face {
  font-family: 'Nunito';
  src: url(${nunitoSemiBold}) format('truetype');
  font-weight: 600;
}
@font-face {
  font-family: 'Nunito';
  src: url(${nunitoRegular}) format('truetype');
  font-weight: 400;
}
`;

export default FontStyles;
