import { useContext } from "react";
import { ThemesContext } from "../../contexts/ThemeContext";
import * as S from "../Profile/styles";
import * as T from "./styles";

const Themes = () => {
  
  const [themeData, setThemeData] = useContext(ThemesContext);

  const themelist = {
    pinkPlease: "linear-gradient(to right, #e55d87, #5fc3e4)",
    deepPurple: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    cleanOrange: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    bloomBlue: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
  };

  return (
    <S.PageContainer>
      <S.PageHeader>
        <S.PageTitle>Theme</S.PageTitle>
      </S.PageHeader>
      <T.FlexWrapper>
        <T.ThemeBox
          onClick={() => setThemeData(prev => ({...prev, background: themelist.pinkPlease}))}
          theme={themelist.pinkPlease}
        ></T.ThemeBox>
        <T.ThemeBox
          onClick={() => setThemeData(prev => ({...prev, background: themelist.deepPurple}))}
          theme={themelist.deepPurple}
        ></T.ThemeBox>
        <T.ThemeBox
          onClick={() => setThemeData(prev => ({...prev, background: themelist.cleanOrange}))}
          theme={themelist.cleanOrange}
        ></T.ThemeBox>
        <T.ThemeBox
          onClick={() => setThemeData(prev => ({...prev, background: themelist.bloomBlue}))}
          theme={themelist.bloomBlue}
        ></T.ThemeBox>
      </T.FlexWrapper>
    </S.PageContainer>
  );
};

export default Themes;
