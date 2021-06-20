import styled from "styled-components";

export const Input = styled.input`
  width: 80%;
  height: 40px;
  padding: 1rem;
  border-radius: 50px;
  border: none;
`;

export const PageContainer = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  overflow: scroll;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
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
  }

  p {
    margin-top: 0.2rem;
    font-size: 1.2rem;
  }
  h3 {
    color: #7d79ef;
  }
  span {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const EditButton = styled.button`
  width: 100px;
  height: 30;
  background-color: transparent;
  border: solid #9b98ee;
  color: #9b98ee;
  padding: 0.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #9b98ee;
    color: white;
  }
`;
