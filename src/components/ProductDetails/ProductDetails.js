import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    border: 1px solid blue;
`

class ProductDetails extends React.Component {
  state = {};

  render() {
    return <MainContainer>ProductDetails</MainContainer>;
  }
}

export default ProductDetails;