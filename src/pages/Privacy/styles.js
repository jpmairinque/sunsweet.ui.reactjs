import styled from "styled-components";
import { GoUpAnimation } from "../Profile/styles";

export const Select = styled.select`
  font-weight: 500;
  width: 8rem;
  padding: 0.2rem;

  border-radius: 2rem;
  border: none;
  background-color: white;

  animation: ${GoUpAnimation} 0.5s;
  cursor: pointer;
`;
export const Option = styled.option``;
