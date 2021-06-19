import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { HomeContainer } from "./styles";
import Header from "../../components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Profile from "../Profile/Profile";

const BottomDiv = styled.div`
display:flex;
height:100%;
width:100%;`

const Home = () => {
  return (
   
    <HomeContainer>
      <Header />
      <BottomDiv>
      <Navbar />
      <Router>
      <Route path="/">

       <Profile/>

      </Route>





      </Router>
      </BottomDiv>
    </HomeContainer>

  );
};

export default Home;
