import React from "react";
import styled from "styled-components";


// Aqui vamos mudar pro import { Grid } from '@material-ui/core';
const MainContainer = styled.div`
    border: 1px solid blue;
`

class Cart extends React.Component {
  state = {};

  render() {
    return <MainContainer>Cart</MainContainer>;
  }
}

export default Cart;