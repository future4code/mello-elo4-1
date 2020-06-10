import styled from "styled-components";

export const HeaderText = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: black;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid green;
  height: 80vh;
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
