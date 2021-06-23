import {createContext} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Profile from "../Profile/Profile";
import Themes from "../Themes/Themes";
import { HomeContainer, BottomDiv } from "./styles";
import { UserProvider } from "../../contexts/UserContext";

export const ThemesContext = createContext()

const Home = (props) => {

  return (

    <ThemesContext.Provider value={[props.theme, props.setTheme]}>  
      <UserProvider>
        <HomeContainer>
          <Header/> 
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
