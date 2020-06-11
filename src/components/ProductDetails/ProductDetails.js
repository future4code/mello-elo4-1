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

function ProductDetails(props) {
  const { product, changePage, setCategory } = props;

  return (
    product ? (
      <MainContainer>
        <h1>{product.name}</h1>
        <HyperlinkContainer>
          <SectionLink onClick={() => changePage("productsGrid")}>
            Página inicial
          </SectionLink>{" "}
          <Arrow />{" "}
          <SectionLink
            onClick={() => {
              setCategory(product.category);
              changePage("productsGrid");
            }}
          >
            {product.category}
          </SectionLink>{" "}
          <Arrow /> <SectionLink>{product.name}</SectionLink>
        </HyperlinkContainer>
        <DetailsContainer>
          <ProductContainer>
            <ProductImage src={product.photos[0]} alt={`Imagem do produto ${product.name}`} />
          </ProductContainer>
          <Sidebar>
            <Product>
              <ProductParagraph>
                <Category />
                {product.category}
              </ProductParagraph>
            </Product>
            <Product>
              <ProductParagraph>
                <LocalOffer />
                {product.name}
              </ProductParagraph>
            </Product>
            <Product>
              <ProductParagraph>
                <Money />
                R${product.price}
              </ProductParagraph>
            </Product>
            <Product>
              <ProductParagraph>
                <Payments />
                Método de pagamento: {product.paymentMethod}
              </ProductParagraph>
            </Product>
            <Product>
              <ProductParagraph>
                <Installments />
                Parcelado em {product.installments} vezes.
              </ProductParagraph>
            </Product>
          </Sidebar>
        </DetailsContainer>
        <h3>Informações do produto</h3>
        <DescriptionContainer>{product.description}</DescriptionContainer>
      </MainContainer>
    ) : null
  );
}

export default ProductDetails;
