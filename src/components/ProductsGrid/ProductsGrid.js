import React from "react";
import { MainContainer, Categories, Products } from "./styled";

class ProductsGrid extends React.Component {
  state = {};

  render() {
    return (
      <MainContainer>
        <Categories>Categorias</Categories>
        <Products>Produtos</Products>
      </MainContainer>
    );
  }
}

export default ProductsGrid;
