import { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserProvider } from "../../contexts/UserContext";
import { PrivacyProvider } from "../../contexts/PrivacyContext";
import { ThemesContext } from "../../contexts/ThemeContext";
import { HomeContainer, BottomDiv } from "./styles";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Profile from "../Profile/Profile";
import Themes from "../Themes/Themes";
import Privacy from "../Privacy/Privacy";
import GlobalStyle from "../../styles/global";


const Home = () => {
  
  const [theme] = useContext(ThemesContext);

  return (
    <UserProvider>
      <PrivacyProvider>
        <HomeContainer>
          <Header />
          <Router>
            <BottomDiv>
              <Navbar />
              <Route exact path="/" component={Profile} />
              <Route path="/themes" component={Themes} />
              <Route path="/privacy" component={Privacy} />
            </BottomDiv>
          </Router>
        </HomeContainer>
      </PrivacyProvider>
      <GlobalStyle theme={theme} />
    </UserProvider>
  );
};

export default Home;
