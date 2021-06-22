import {useContext, useState} from "react";
import { useHistory } from "react-router";
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
  const [userData, setUserData] = useContext(UserContext);


  return (

      <NavContainer>
        <Userbox>
          <h1>{userData.name}</h1>
          <p>{userData.username}</p>
        </Userbox>

        <NavList>
          <ul>
            <NavItem onClick={()=>{history.push('/')}} selectedIs={true}>Profile</NavItem>
            <NavItem onClick={()=>{history.push('/themes')}} selectedIs={false}>Themes</NavItem>
            <NavItem selectedIs={false}>Privacy</NavItem>
            <NavItem selectedIs={false}>Acessibility</NavItem>
            <NavItem selectedIs={false}>History</NavItem>
          </ul>
        </NavList>

        <LogoutButton>LOG OUT</LogoutButton>
      </NavContainer>
 
  );
};

export default Navbar;
