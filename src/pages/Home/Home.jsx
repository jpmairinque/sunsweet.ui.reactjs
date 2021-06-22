import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { HomeContainer, BottomDiv } from "./styles";
import Header from "../../components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Themes from "../Themes/Themes";
import { UserProvider } from "../../contexts/UserContext";


const Home = () => {
  return (
    <UserProvider>
    <HomeContainer>
      <Header />
      <BottomDiv>
      <Router>
        <Navbar />        
          <Route exact path="/">
            <Profile />
          </Route>
          <Route path="/themes">
            <Themes />
          </Route>
        </Router>
      </BottomDiv>
    </HomeContainer>
    </UserProvider>
  );
};

export default Home;
