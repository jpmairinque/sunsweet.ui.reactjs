import styled from "styled-components";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";


const Title = styled.h1`
  color: blue;
  background-color: red;
`;
function App() {
 
    return (
       <Router>
    <div className="App">
      <Title>Oii</Title>

      
    </div>
     </Router>
    );
 
}

export default App;
