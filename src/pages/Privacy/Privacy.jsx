import { useContext } from "react";
import { PrivacyContext } from "../../contexts/PrivacyContext";

import * as S from "../Profile/styles";
import * as P from "./styles";

const Privacy = () => {

  const [privacyInfo, setPrivacyInfo] = useContext(PrivacyContext)
    
    return (
    <S.PageContainer>
      
      <S.PageHeader>
        <S.PageTitle>Privacy</S.PageTitle>
      </S.PageHeader>

      <>
        <S.InputLabel>
          <h3>VISIBILITY</h3>
          <span>How far can users see you?</span>
          <P.Select value={privacyInfo.visibility} 
                    onChange={(e)=>setPrivacyInfo(prev => ({...prev, visibility: e.target.value}))}>
            <P.Option>Public</P.Option>
            <P.Option>Private</P.Option>
            <P.Option>Only followers</P.Option>
          </P.Select>
        </S.InputLabel>

        <S.InputLabel>
          <h3>DATA</h3>
          <span>When should we keep information?</span>
          <P.Select value={privacyInfo.data} 
                    onChange={(e)=>setPrivacyInfo(prev => ({...prev, data: e.target.value}))}>
            <P.Option>Always</P.Option>
            <P.Option>While using</P.Option>
            <P.Option>Never</P.Option>
          </P.Select>
        </S.InputLabel>

        <S.InputLabel>
          <h3>SHARING</h3>
          <span>Who should share your posts?</span>
          <P.Select value={privacyInfo.sharing} 
                    onChange={(e)=>setPrivacyInfo(prev => ({...prev, sharing: e.target.value}))}>
            <P.Option>Anyone</P.Option>
            <P.Option>Only followers</P.Option>
            <P.Option>Nobody</P.Option>
          </P.Select>
        </S.InputLabel>

      </>

    </S.PageContainer>
  );
};

export default Privacy;
