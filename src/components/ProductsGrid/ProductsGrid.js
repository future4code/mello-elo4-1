import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  border: 1px solid blue;
`;

// Aqui vamos mudar pro import { Grid } from '@material-ui/core';
const Categories = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

// Aqui vamos mudar pro import { Grid } from '@material-ui/core';
const Products = styled.div``

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
