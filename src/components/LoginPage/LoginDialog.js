import React from "react";

import {
  HeaderText,
  Line,
  ButtonsContainer,
  MainContainerLogin,
} from "./styled";

import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import SupplierIcon from "@material-ui/icons/Group";
import UserIcon from "@material-ui/icons/Person";

function LoginDialog(props) {
  const { changeLoginPage } = props;

  const mainTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#584DA8",
      },
      secondary: {
        main: "#99D19C",
      },
    },
  });

  return (
    <>
      <MainContainerLogin>
        <HeaderText>Bem-vindo à Elo4</HeaderText>
        <h2>Entrar como:</h2>
        <ButtonsContainer>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => changeLoginPage("productsGrid")}
          >
            <UserIcon />
            Consumidor
          </Button>
        </ButtonsContainer>
        <Line />
        <ButtonsContainer>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => changeLoginPage("addProduct")}
          >
            <SupplierIcon />
            Fornecedor
          </Button>
        </ButtonsContainer>
      </MainContainerLogin>
    </>
  );
}

export default LoginDialog;
