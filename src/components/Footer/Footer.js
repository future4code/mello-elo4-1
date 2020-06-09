import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    border: 1px solid red;
`

class Footer extends React.Component {
  state = {};

  render() {
    return <MainContainer>Footer</MainContainer>;
  }
}

export default Footer;