import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif ;
}

    html, body, #root {
    width: 100%;
    height: 100%;
  }


 #root{
    background: linear-gradient(to right, #e55d87, #5fc3e4) ;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @font-face {
    font-family: 'Montserrat', sans-serif ;
    font-style: normal;
    src: url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
}




`

export default GlobalStyle
