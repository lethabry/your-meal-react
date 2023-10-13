import { createGlobalStyle } from 'styled-components';

const BodyStyles = createGlobalStyle`
body{
  font-family: 'Nunito', Arial, sans-serif;
  margin: 0 auto;
  background-color: #F9F9F9;
}
input[type='number'],
input[type="number"]:hover,
input[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`;

export default BodyStyles;
