import React from "react";

import { MainContainer, HeaderText, ButtonsContainer } from "./styled";

import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import SupplierIcon from "@material-ui/icons/Group";
import UserIcon from "@material-ui/icons/Person";

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

function LoginPage(props) {
  const { changePage } = props;

  return (
    <MuiThemeProvider theme={mainTheme}>
      <MainContainer>
        <HeaderText>Bem-vindo à Elo4</HeaderText>
        <ButtonsContainer>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => changePage("productsGrid")}
          >
            <UserIcon />
            Consumidor
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => changePage("addProduct")}
          >
            <SupplierIcon />
            Fornecedor
          </Button>
        </ButtonsContainer>
      </MainContainer>
    </MuiThemeProvider>
  );
}

export default LoginPage;
