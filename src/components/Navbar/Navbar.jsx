import {useContext, useState} from "react";
import { useHistory, useLocation } from "react-router";
import {
  Userbox,
  NavList,
  NavItem,
  NavContainer,
  LogoutButton,
} from "./styles";

import { UserContext } from "../../contexts/UserContext";

const Navbar = () => {

  const history = useHistory()
  const location = useLocation()

  const [userData, setUserData] = useContext(UserContext);

  return (

      <NavContainer>

        <Userbox>
          <h1>{userData.name}</h1>
          <p>{userData.username}</p>
        </Userbox>

        <NavList>
          <ul>
            <NavItem 
              onClick={()=>{history.push('/')}} 
              selectedIs={location.pathname==="/"}>Profile</NavItem>
            <NavItem 
              onClick={()=>{history.push('/themes')}} 
              selectedIs={location.pathname==="/themes"}>Themes</NavItem>
            <NavItem 
             onClick={()=>{history.push('/privacy')}} 
              selectedIs={location.pathname==="/privacy"}>Privacy</NavItem>
            <NavItem 
              selectedIs={false}>Acessibility</NavItem>
            <NavItem 
              selectedIs={false}>History</NavItem>
          </ul>
        </NavList>

        <LogoutButton>LOG OUT</LogoutButton>

      </NavContainer>
 
  );
};

export default Navbar;
