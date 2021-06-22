import * as S from '../Profile/styles'
import * as T from './Themes'



const Themes = (props) => {

    console.log(props.theme)



    return (
        <S.PageContainer>
            <S.PageHeader><S.PageTitle>Theme</S.PageTitle></S.PageHeader>
            <T.ThemeBox theme={props.theme}>a</T.ThemeBox>
    
            
        </S.PageContainer>
    )
}

export default Themes
