import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    border: 1px solid green;
`

class HeaderSearch extends React.Component {
  state = {};

  render() {
    return <MainContainer>HeaderSearch</MainContainer>;
  }
}

export default HeaderSearch;
