import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;;
    background: #020025;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: #A3D4E7;
  }
`;

export default GlobalStyle;