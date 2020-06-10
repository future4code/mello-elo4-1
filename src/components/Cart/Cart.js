import React from "react";
import { MainContainer } from "./styled";
import axios from "axios";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const ButtonColor = styled(Button)`
  background-color: black;
  color: white;
`;

function Cart(props) {
  const { cart, removeFromCart } = props;

  const newListCart = [];
  let total = 0;
  cart.forEach((product) => {
    total += product.price;
    const checkProduct = newListCart.findIndex(
      (prod) => prod.id === product.id
    );
    if (checkProduct === -1) {
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        amount: 1,
      };
      newListCart.push(newProduct);
    } else {
      newListCart[checkProduct].amount++;
    }
  });

  const renderedCart = newListCart.map((product) => (
    <p>
      {product.name}&nbsp;X{product.amount}&nbsp;R$:{product.price}
      <br></br>
      <ButtonColor
        variant="contained"
        onClick={() => removeFromCart(product.id)}
      >
        Excluir Produto
      </ButtonColor>
    </p>
  ));

  return (
    <MainContainer>
      <div>
        <h1>Carrinho</h1>
        <h2>{renderedCart}</h2>
        <hr />
        <h1>TOTAL:{total}</h1>
      </div>
    </MainContainer>
  );
}

export default Cart;
