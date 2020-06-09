import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    border: 1px solid blue;
`

class LoginPage extends React.Component {
  state = {};

  render() {
    return <MainContainer>Login</MainContainer>;
  }
}

export default LoginPage;
