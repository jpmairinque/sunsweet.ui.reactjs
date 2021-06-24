import { useContext } from "react";
import * as S from "../Profile/styles";
import * as A from "./styles"
import { ThemesContext } from "../../contexts/ThemeContext";

const Acessibility = () => {
  const [themeData, setThemeData] = useContext(ThemesContext);

  return (
    

      <S.PageContainer>
        <S.PageHeader>
          <S.PageTitle>Acessibility</S.PageTitle>
        </S.PageHeader>
     
       <S.InputLabel>
           <h3>FONT SIZE</h3>
           <span>Change it until you're able to see clearly =)</span>
           <A.FlexWrapper>
           <A.FontBox  onClick={() => setThemeData(prev => ({...prev, fontsize: '14px'}))} font={'18px'}>Aa</A.FontBox>
           <A.FontBox onClick={() => setThemeData(prev => ({...prev, fontsize: '16px'}))} font={'28px'}>Aa</A.FontBox>
           <A.FontBox onClick={() => setThemeData(prev => ({...prev, fontsize: '18px'}))} font={'38px'}>Aa</A.FontBox>
           </A.FlexWrapper>
       </S.InputLabel>
     
      </S.PageContainer>

  );
};

export default Acessibility;
