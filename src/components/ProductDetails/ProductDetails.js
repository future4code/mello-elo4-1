import React from "react";
import {
  MainContainer,
  Sidebar,
  ProductContainer,
  Product,
  DetailsContainer,
  ProductParagraph,
  ProductImage,
  DescriptionContainer,
  HyperlinkContainer,
  SectionLink,
} from "./styled";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import Category from "@material-ui/icons/Category";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Payments from "@material-ui/icons/Payment";
import Money from "@material-ui/icons/AttachMoney";
import Installments from "@material-ui/icons/ShopTwo";
import Arrow from "@material-ui/icons/KeyboardArrowRight";

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

class ProductDetails extends React.Component {
  // Mock de dados
  state = {
    name: "Guitarra Ibanez RG721rw",
    description: "Este é um produto muito legal!",
    price: 3050.5,
    paymentMethod: "Dinheiro",
    category: "Instrumentos musicais",
    photo: [
      "https://images-submarino.b2w.io/produtos/01/00/img/97596/9/97596947_1GG.jpg",
    ],
    installments: 3,
  };

  callback = () => {};
  render() {
    return (
      <MainContainer>
        <h1>{this.state.name}</h1>
        <HyperlinkContainer>
          <SectionLink onClick={() => this.props.changePage("login")}>
            Página inicial
          </SectionLink>{" "}
          <Arrow /> <SectionLink>{this.state.category}</SectionLink> <Arrow />{" "}
          <SectionLink>{this.state.name}</SectionLink>
        </HyperlinkContainer>
        <DetailsContainer>
          <ProductContainer>
            <ProductImage src={this.state.photo} alt="" />
          </ProductContainer>
          <Sidebar>
            <Product>
              <ProductParagraph>
                <Category />
                {this.state.category}
              </ProductParagraph>
            </Product>
            <Product>
              <ProductParagraph>
                <LocalOffer />
                {this.state.name}
              </ProductParagraph>
            </Product>
            <Product>
              <ProductParagraph>
                <Money />
                R${this.state.price}
              </ProductParagraph>
            </Product>
            <Product>
              <ProductParagraph>
                <Payments />
                Método de pagamento: {this.state.paymentMethod}
              </ProductParagraph>
            </Product>
            <Product>
              <ProductParagraph>
                <Installments />
                Parcelado em {this.state.installments} vezes.
              </ProductParagraph>
            </Product>
          </Sidebar>
        </DetailsContainer>
        <h3>Informações do produto</h3>
        <DescriptionContainer>{this.state.description}</DescriptionContainer>
      </MainContainer>
    );
  }
}

export default ProductDetails;
