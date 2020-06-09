import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  border: 1px solid blue;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const Products = styled.div``

class SupplierList extends React.Component {
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

export default SupplierList;