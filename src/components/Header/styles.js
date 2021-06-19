import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 80px;
  background-color: #27293f;
  border-radius: 15px 15px 0px 0px;

  h1 {
    margin-right: 4rem;
    color: white;
    font-weight: 200;
    span{
      font-weight: 700;
    }
  }
`;
