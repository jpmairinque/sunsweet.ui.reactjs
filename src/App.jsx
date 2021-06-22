import GlobalStyle from "./styles/global";
import Home from "./pages/Home/Home";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState('linear-gradient(to right, #e55d87, #5fc3e4)')
  


  return (
    <>
   
      <Home theme={theme} setTheme={setTheme}/>

      <GlobalStyle theme={theme} />
     
    </>
  );
}

export default App;
