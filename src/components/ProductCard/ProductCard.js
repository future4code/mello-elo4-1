import React from "react";
import { MainContainer } from "./styled";

function ProductCard(props) {
  const { product, setSelectedProduct, changePage, addProductToCart } = props;

  function showProductDetails(product) {
    setSelectedProduct(product);
    changePage("productDetails");
  }

  return (
    <MainContainer>
      <img
        src={product.photos[0]}
        style={{ width: "100%", height: "80%" }}
        alt={`Imagem do produto ${product.name}`}
      />
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
          <button
            onClick={() => {
              showProductDetails(product);
            }}
          >
            Detalhes
          </button>
          <button
            onClick={() => {
              addProductToCart(product);
            }}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </MainContainer>
  );
}

export default ProductCard;
