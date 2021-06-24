import styled from "styled-components";
import { GoUpAnimation } from "../Profile/styles";

export const LogoutWrapper = styled.div`
  height: 80%;
  width: 100%;

  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${GoUpAnimation} 1s;
  border-radius: 0px 0px 0px 15px;

  h1 {
    font-weight: 500;
    margin-bottom: 0.8rem;
  }
  h3 {
    font-weight: 400;
  }

  span {
    color: #9b98ee;
    font-weight: 500;
  }

  img {
    width: 25%;
  }

  button {
    transform: scale(1.2);
  }
`;
