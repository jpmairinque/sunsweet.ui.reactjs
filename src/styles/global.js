import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
    body,html {    
    height: 100%;
  }

 #root{
    background: ${props=>props.theme} ;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }


`;

export default GlobalStyle;
