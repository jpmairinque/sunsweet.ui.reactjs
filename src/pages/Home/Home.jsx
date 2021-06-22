import Navbar from "../../components/Navbar/Navbar";
import { HomeContainer, BottomDiv } from "./styles";
import Header from "../../components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Themes from "../Themes/Themes";
import { UserProvider } from "../../contexts/UserContext";
import {createContext } from "react";
export const ThemesContext = createContext()

const Home = (props) => {



  return (
    <ThemesContext.Provider value={[props.theme, props.setTheme]}>  
      <UserProvider>
      <HomeContainer>
        <Header /> 
        <Router>
        <BottomDiv>       
          <Navbar />                
            <Route exact path="/" component={Profile}/>
            <Route path="/themes" component={Themes}/>
          </BottomDiv> 
        </Router>
      </HomeContainer>
      </UserProvider>
    </ThemesContext.Provider>
  );
};

export default Home;
