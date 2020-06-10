import React from "react";
import { MainContainer } from "./styled";
import axios from "axios";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const ButtonColor = styled(Button)`
  background-color: black;
  color: white;
`;

class Cart extends React.Component {
  state = {
    products: [],
    cart: [],
  };

  getProducts = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products"
      )
      .then((response) => {
        this.setState({ products: response.data.products });
        console.log(this.state.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addToCart = (product) => {
    const newCart = [...this.state.cart, product];
    this.setState({ cart: newCart });
    console.log(this.state.cart);
  };

  removeFromCart = (id) => {
    const newCart = this.state.cart.filter((product) => product.id !== id);
    this.setState({ cart: newCart });
  };

  render() {
    const newListCart = [];
    let total = 0;
    this.state.cart.forEach((product) => {
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
    const renderCart = newListCart.map((product) => (
      <p>
        {product.name}&nbsp;X{product.amount}&nbsp;R$:{product.price}
        <br></br>
        <ButtonColor
          variant="contained"
          onClick={() => this.removeFromCart(product.id)}
        >
          Excluir Produto
        </ButtonColor>
      </p>
    ));

    return (
      <MainContainer>
        <p>Cart</p>
        <Button variant="contained" onClick={this.getProducts}>
          getProducts
        </Button>
        {this.state.products.map((products) => {
          return (
            <div>
              {products.name}&nbsp;R${products.price}
              <Button
                variant="contained"
                onClick={() => this.addToCart(products)}
              >
                Add_To_Cart
              </Button>
              <hr></hr>
            </div>
          );
        })}
        <hr></hr>
        <div>
          <h1>CART</h1>
          <h2>{renderCart}</h2>
          <hr></hr>
          <h1>TOTAL:{total}</h1>
        </div>
      </MainContainer>
    );
  }
}
//Linha 56 a 74, area produtos
//Linha 76 a 79, area carrinho
export default Cart;
