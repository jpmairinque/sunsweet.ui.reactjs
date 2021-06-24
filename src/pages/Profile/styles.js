import styled, { keyframes } from "styled-components";

export const GoDownAnimation = keyframes`

from { transform: translateY(-10px) }
  to { transform: translateY(0px) }
`;
export const GoUpAnimation = keyframes`

from { transform: translateY(10px) }
  to { transform: translateY(0px) }
`;

export const Input = styled.input`
  width: 80%;
  height: 1.2rem;
  padding: 1rem;
  border-radius: 50px;
  border: none;
  animation: ${GoDownAnimation} 0.5s;
`;

export const PageContainer = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  @media (max-height: 850px) {
    overflow: scroll;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  padding: 2rem;

  button {
    margin-right: 2rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;

export const InputLabel = styled.div`
  font-family: "PT Sans", sans-serif;
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  &::before {
    content: "";
    background: #9b98ee;
    position: absolute;
    bottom: 0;
    left: 0;
    
    height: 100%;
    width: 0.3rem;
    transform: translate(-15px);
    transition: 5s;
  }

  p {
    margin-top: 0.2rem;
    font-size: 1.2rem;
    font-weight: 600;
    animation: ${GoUpAnimation} 0.5s;
  }
  h3 {
    color: #7d79ef;
  }
  span {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-style: italic;
    font-size: 0.8rem;
    font-weight: 500;
    color: grey;
  }
`;

export const EditButton = styled.button`
  width: 100px;
  background-color: transparent;
  color: #9b98ee;

  padding: 0.5rem;
  border: solid #9b98ee;
  border-radius: 50px;
  
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #9b98ee;
    color: white;
  }
`;
