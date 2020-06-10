import React from "react";
import {
  MainContainer,
  ListItemFooter,
  SocialMediaIcon,
  SocialMediaContainer,
  ListFooter,
} from "./styled";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import PaymentMethodsPicture from "./paymentMethods.png";

import Button from "@material-ui/core/Button";

const teamName = "< Equipe DevSerImpecável />";

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

function Footer(props) {
  return (
    <MuiThemeProvider theme={mainTheme}>
      <MainContainer>
        <ListFooter>
          <h4>Redes Sociais</h4>
          <SocialMediaContainer>
            <ListItemFooter>
              <SocialMediaIcon src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/01-512.png" />
            </ListItemFooter>
            <ListItemFooter>
              <SocialMediaIcon src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" />
            </ListItemFooter>
            <ListItemFooter>
              <SocialMediaIcon src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" />
            </ListItemFooter>
            <ListItemFooter>
              <SocialMediaIcon src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png" />
            </ListItemFooter>
            <ListItemFooter>
              <SocialMediaIcon src="https://cdn3.iconfinder.com/data/icons/picons-social/57/73-pinterest-512.png" />
            </ListItemFooter>
          </SocialMediaContainer>
        </ListFooter>
        <ListFooter>
          <h4>Newsletter</h4>
          <ListItemFooter>
            Receba novidades personalizadas no seu e-mail
          </ListItemFooter>
          <ListItemFooter>
            <Input type="email" placeholder="digite aqui seu email"></Input>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => alert("E-mail enviado com sucesso!")}
            >
              Assinar
            </Button>
          </ListItemFooter>
        </ListFooter>
        <ListFooter>
          <h4>Métodos de pagamento</h4>
          <img src={PaymentMethodsPicture} alt="" />
        </ListFooter>
        <ListFooter>
          <h4>Deixe-nos ajudá-lo</h4>
          <ListItemFooter>Sua conta</ListItemFooter>
          <ListItemFooter>Devoluções e reembolsos</ListItemFooter>
          <ListItemFooter>Ajuda</ListItemFooter>
          <ListItemFooter>SAC</ListItemFooter>
        </ListFooter>
        <ListFooter>
          <h4>Feito por</h4>
          <ListItemFooter>{teamName}</ListItemFooter>
        </ListFooter>
      </MainContainer>
    </MuiThemeProvider>
  );
}

export default Footer;
