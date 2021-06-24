import { useContext } from "react";
import { UserProvider } from "../../contexts/UserContext";
import { PrivacyProvider } from "../../contexts/PrivacyContext";
import { ThemesContext } from "../../contexts/ThemeContext";
import { HomeContainer } from "./styles.js";

import Header from "../../components/Header/Header";
import GlobalStyle from "../../styles/global";
import Routes from "../../routes";

const Home = () => {

  const [themeData] = useContext(ThemesContext);

  return (

    <UserProvider>
      <PrivacyProvider>
        <HomeContainer>
          <Header />
          <Routes />
        </HomeContainer>
      </PrivacyProvider>
      <GlobalStyle themeData={themeData} />
    </UserProvider>

  );
};

export default Home;
