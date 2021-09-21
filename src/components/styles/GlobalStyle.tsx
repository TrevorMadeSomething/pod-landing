import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


  html {
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    background: #121725;
    
  }
`;

export default GlobalStyle;
