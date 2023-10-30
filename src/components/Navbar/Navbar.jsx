import {useContext} from "react";
import { useHistory, useLocation } from "react-router";
import * as S from "./styles";

import { UserContext } from "../../contexts/UserContext";

const Navbar = () => {

  const history = useHistory()
  const location = useLocation()

  console.log('%cXABLAU','color: blue',location );
  const [userData] = useContext(UserContext);

  return (

      <S.NavContainer>

        <S.Userbox>
          <h1>{userData.name}</h1>
          <p>{"@" + userData.username}</p>
        </S.Userbox>

        <S.NavList>
          <ul>
            <S.NavItem 
              onClick={()=>{history.push('/home/profile')}} 
              selectedIs={location.pathname==="/home/profile"}>Profile</S.NavItem>
            <S.NavItem 
              onClick={()=>{history.push('/home/themes')}} 
              selectedIs={location.pathname==="/home/themes"}>Themes</S.NavItem>
            <S.NavItem 
             onClick={()=>{history.push('/home/privacy')}} 
              selectedIs={location.pathname==="/home/privacy"}>Privacy</S.NavItem>
            <S.NavItem 
              onClick={()=>{history.push('/home/acessibility')}} 
              selectedIs={location.pathname==="/home/acessibility"}>Acessibility</S.NavItem>
          
          </ul>
        </S.NavList>

        <S.LogoutButton onClick={()=>{history.push('/logout')}}>LOG OUT</S.LogoutButton>

      </S.NavContainer>
 
  );
};

export default Navbar;
