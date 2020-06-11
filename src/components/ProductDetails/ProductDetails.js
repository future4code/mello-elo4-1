import React from "react";
import {
  MainContainer,
  ProductName,
  HyperlinkContainer,
  SectionLink,
  DetailsContainer,
  ProductContainer,
  ProductImage,
  Sidebar,
  Product,
  PriceParagraph,
  ProductParagraph,
  AddToCartButton,
  ProductDescriptionHeader,
  DescriptionContainer,
  ProductDescription,
} from "./styled";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Arrow from "@material-ui/icons/KeyboardArrowRight";
import Category from "@material-ui/icons/Category";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Payments from "@material-ui/icons/Payment";
import Money from "@material-ui/icons/AttachMoney";
import Installments from "@material-ui/icons/ShopTwo";

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
  const { product, changePage, setCategory, addProductToCart } = props;

  const productDescription = product.description;

  // Evita que o layout quebre caso o usuário coloque uma descrição muito grande.
  function descriptionLengthLimiter() {
    let productDescriptionLength = productDescription.length;

    if (productDescriptionLength > 140) {
      let slicedProductDescription = productDescription.slice(0, 140);
      let slicedProductDescription2 = productDescription.slice(140, 298);
      return (
        <div>
          <ProductDescription>{slicedProductDescription}</ProductDescription>
          <ProductDescription>{slicedProductDescription2}</ProductDescription>
        </div>
      );
    }
  }

  function showDialog() {
    alert(`Produto "${product.name}" adicionado ao carrinho!`);
  }

  return (
    product && (
      <MuiThemeProvider theme={mainTheme}>
        <MainContainer>
          <ProductName>{product.name}</ProductName>
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
              <ProductImage
                src={product.photos[0]}
                alt={`Imagem do produto ${product.name}`}
              />
            </ProductContainer>
            <Sidebar>
              <Product>
                <PriceParagraph>{`R$ ${product.price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}`}</PriceParagraph>
              </Product>

              <Product>
                <Category />
                <ProductParagraph>{product.category}</ProductParagraph>
              </Product>

              <Product>
                <Payments />
                <ProductParagraph>
                  Método de pagamento: {product.paymentMethod}
                </ProductParagraph>
              </Product>
              <Product>
                <Installments />
                <ProductParagraph>
                  Parcelado em até {product.installments} vezes no cartão Elo4
                </ProductParagraph>
              </Product>
              <Product>
                <AddToCartButton>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ width: "90%", height: "80%" }}
                    onClick={() => {
                      addProductToCart(product);
                      showDialog();
                    }}
                  >
                    Adicionar ao carrinho
                  </Button>
                </AddToCartButton>
              </Product>
            </Sidebar>
          </DetailsContainer>
          <ProductDescriptionHeader>
            Informações do produto
          </ProductDescriptionHeader>
          <DescriptionContainer>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductDescription>{product.description}</ProductDescription>
            {descriptionLengthLimiter()}
          </DescriptionContainer>
        </MainContainer>
      </MuiThemeProvider>
    )
  );
}

export default ProductDetails;