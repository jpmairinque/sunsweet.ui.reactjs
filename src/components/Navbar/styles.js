import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #ffffff;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  flex-wrap: wrap;
  padding: 2rem;
  border-radius: 0px 0px 0px 15px;
  box-shadow: 19px 0px 35px -17px #9a97ef;
`;

export const LogoutButton = styled.button`
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

export const Userbox = styled.div`
  position: relative;

  margin-left: 1rem;

  h1 {
    margin-bottom: 0.5rem;
  }

  &::before {
    content: "";
    background: #9b98ee;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 0.3rem;
    transform: translate(-10px);
  }
`;

export const NavList = styled.div``;

export const NavItem = styled.li`
  list-style: none;

  @font-face {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    src: url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
  }

  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #9b98ee;
  }
  ${(props) =>
    props.selectedIs === true ? "color: #9B98EE; font-weight:600; " : "black"}
`;
