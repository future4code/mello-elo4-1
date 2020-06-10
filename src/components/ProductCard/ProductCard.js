import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 250px;
  border: 1px solid blue;
  margin: 5px;
`;

function ProductCard(props) {
  const { product } = props;
  return (
    <MainContainer>
      <img src={product.photos[0]} style={{ width: "100%" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{product.name} </span>
          <span>{`R$ ${product.price.toFixed(2)}`}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button>Detalhes</button>
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </MainContainer>
  );
}

export default ProductCard;
