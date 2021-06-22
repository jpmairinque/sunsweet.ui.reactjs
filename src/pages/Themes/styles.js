import styled from "styled-components";
import { GoUpAnimation } from "../Profile/styles";

export const ThemeBox = styled.div`
  min-width: 150px;
  height: 150px;
  border-radius: 200px;
  background: ${(props) => props.theme};
  transition: 1s;
  cursor: pointer;
  animation-name: ${GoUpAnimation};
  animation-duration: 0.5s;
  &:hover {
    transform: scale(1.08);
  }
`;

export const FlexWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 2rem;
`;
