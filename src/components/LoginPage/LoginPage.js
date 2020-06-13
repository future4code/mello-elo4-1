import React from "react";
import LoginDialog from "./LoginDialog";

import { MainContainer } from "./styled";

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
        <LoginDialog changeLoginPage={changePage} />
      </MainContainer>
    </MuiThemeProvider>
  );
}

export default LoginPage;
