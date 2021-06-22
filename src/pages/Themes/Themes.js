import styled, {keyframes} from "styled-components";

export const ThemeBox = styled.div`

    width: 150px;
    height: 150px;
    border-radius: 100px;
    background: ${props => props.theme};


`