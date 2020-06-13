import styled from "styled-components";
import BackgroundImage from "./Wallpaper.png";

export const HeaderText = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: black;

  &:hover {
    transition-duration: 300ms;
    color: #584da8;
  }
`;

export const MainContainerLogin = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  min-width: 25%;
  height: 72.5%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Line = styled.div`
  background-color: rgba(129, 130, 138, 0.65);
  width: 60%;
  height: 2px;
`;

export const MainContainer = styled.div`
  margin: 0;
  background: url(${BackgroundImage});
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  height: 1080px;
`;

export const Header = styled.header`
  display: flex;
  margin: 0 auto;
  width: 90%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  border: 1px solid purple;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
