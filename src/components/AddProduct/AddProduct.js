import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    border: 1px solid blue;
`

class AddProduct extends React.Component {
  state = {};

  render() {
    return <MainContainer>AddProduct</MainContainer>;
  }
}

export default AddProduct;