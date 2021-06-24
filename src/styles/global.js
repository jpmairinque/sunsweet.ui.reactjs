import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



*{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
    width: 5px;
    } 

    ::-webkit-scrollbar-track {
    border-radius: 40px;
    }

    ::-webkit-scrollbar-thumb {
      background: #9b98ee;
      border-radius: 40px;
    }
  }

body,html {    
height: 100%;
  }

 #root{
    background: ${(props) => props.themeData.background} ;

    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 100vh;
    }

`;

export default GlobalStyle;
