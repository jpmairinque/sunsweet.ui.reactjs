import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif !important;
}

    body,html {
    
    height: 100%;
  }


 #root{
    background: linear-gradient(to right, #e55d87, #5fc3e4) ;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  /* @font-face {
    font-family: 'SFDisplay', sans-serif ;
    font-style: normal;
    src: local('SFDisplay'), url("./fonts/FontsFree-Net-SFProDisplay-Regular.ttf") format('truetype');
} */

`;

export default GlobalStyle;
