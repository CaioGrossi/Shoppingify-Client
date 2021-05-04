import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }


  ::-webkit-scrollbar {
    width: 10px;
  }

  

  ::-webkit-scrollbar-thumb {
    background:  #f9a109; 
    border-radius: 10px;
  }


  ::-webkit-scrollbar-thumb:hover {
    background: #d68e11
  }
`;

export default GlobalStyles;
