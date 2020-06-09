import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    border: 1px solid blue;
`

class ProductDetail extends React.Component {
  state = {};

  render() {
    return <MainContainer>ProductDetail</MainContainer>;
  }
}

export default ProductDetail;