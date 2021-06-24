import { LogoutButton } from "../../components/Navbar/styles";
import { useHistory } from "react-router";

import * as L from "./styles";
import Figure from "../../assets/photofig.svg";

const Logout = () => {
    
  const history = useHistory();

  return (

    <L.LogoutWrapper>
      <h1>Goodbye!</h1>
      <h3>
        We <span>hope</span> to see <span>you</span> soon! =(
      </h3>
      <img src={Figure} alt="" />
      <LogoutButton onClick={() => history.push("/home/profile")}>Go back!</LogoutButton>      
    </L.LogoutWrapper>
    
  );
};

export default Logout;
