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
`;

export const PageTitle = styled.h1`
  padding: 2rem;
  font-size: 3rem;
  font-weight: 600;
`;

export const InputLabel = styled.div`
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  h3 {
    color: #7d79ef;
  }
  span {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const EditButton = styled.button`
  width: 1rem;
  background-color: #9b98ee;
  height: 30px;
  border: none;
`;
