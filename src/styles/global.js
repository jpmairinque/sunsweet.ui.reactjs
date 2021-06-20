import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif ;
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

  @font-face {
    font-family: 'Montserrat', sans-serif ;
    font-style: normal;
    src: url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
}




`;

export default GlobalStyle;
