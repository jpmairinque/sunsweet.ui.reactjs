import styled from "styled-components";
import { GoUpAnimation } from "../Profile/styles";

export const FontBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 200px;
  background: transparent;
  border: 2px solid #9b98ee;

  transition: 0.5s;
  cursor: pointer;
  animation: ${GoUpAnimation} 0.5s;

  font-size: ${(props) => props.font};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.08);
    background-color: #9b98ee;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  div {
    margin-right: 1rem;
  }
`;
