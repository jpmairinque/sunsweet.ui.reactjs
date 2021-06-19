import GlobalStyle from "./styles/global";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
