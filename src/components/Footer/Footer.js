import React from "react";
import {
  MainContainer,
  ListItemFooter,
  SocialMediaIcon,
  SocialMediaContainer,
  ListFooter,
  H4,
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
          <H4>Redes Sociais</H4>
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
          <H4>Newsletter</H4>
          <ListItemFooter>
            Receba novidades personalizadas
          </ListItemFooter>
          <ListItemFooter>
            <Input type="email" placeholder="digite aqui seu email"></Input>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              style={{marginTop:"2px"}}
              onClick={() => alert("E-mail enviado com sucesso!")}
            >
              Assinar
            </Button>
          </ListItemFooter>
        </ListFooter>
        <ListFooter>
          <H4>Métodos de pagamento</H4>
          <img src={PaymentMethodsPicture} alt="" />
        </ListFooter>
        <ListFooter>
          <H4>Deixe-nos ajudá-lo</H4>
          <ListItemFooter>Sua conta</ListItemFooter>
          <ListItemFooter>Devoluções e reembolsos</ListItemFooter>
          <ListItemFooter>Ajuda</ListItemFooter>
          <ListItemFooter>SAC</ListItemFooter>
        </ListFooter>
        <ListFooter>
          <H4>Feito por</H4>
          <ListItemFooter>{teamName}</ListItemFooter>
        </ListFooter>
      </MainContainer>
    </MuiThemeProvider>
  );
}

export default Footer;
