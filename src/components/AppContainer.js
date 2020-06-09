import React, { Component } from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import Footer from "./Footer/Footer";
import LoginPage from "./LoginPage/LoginPage";
import ProductGrid from "./ProductGrid/ProductGrid";
import ProductDetail from "./ProductDetail/ProductDetail";
import Cart from "./Cart/Cart";
import SupplierList from "./SupplierList/SupplierList";
import AddProduct from "./AddProduct/AddProduct";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 80px;
  width: 90vw;
  height: 90vh;
  margin: auto;
  margin-top: 20px;
`;

export class AppContainer extends Component {
  state = {
    displayPage: "login", // Opcoes: login, productGrid, productDetail, cart, supplierList, addProduct
  };

  renderComponent = () => {
    switch (this.state.displayPage) {
      case "login":
        return <LoginPage />;
      case "productGrid":
        return <ProductGrid />;
      case "productDetail":
        return <ProductDetail />;
      case "cart":
        return <Cart />;
      case "supplierList":
        return <SupplierList />;
      case "addProduct":
        return <AddProduct />;
      default:
        break;
    }
  };

  renderHeader = () => {
    if (
      this.state.displayPage === "productGrid" ||
      this.state.displayPage === "productDetail" ||
      this.state.displayPage === "cart"
    ) {
      return <HeaderSearch />;
    } else {
      return <HeaderLogo />;
    }
  };

  handleSelecTest = (e) => {
    this.setState({ displayPage: e.target.value });
  };

  selectTest = (
    <select onChange={this.handleSelecTest}>
      <option value="login">login</option>
      <option value="productGrid">productGrid</option>
      <option value="productDetail">productDetail</option>
      <option value="cart">cart</option>
      <option value="supplierList">supplierList</option>
      <option value="addProduct">addProduct</option>
    </select>
  );

  render() {
    return (
      // as duas linhas abaixo sao para teste e serao apagadas
      <div>
        {this.selectTest}
        <MainContainer>
          {this.renderHeader()}
          {this.renderComponent()}
          <Footer />
        </MainContainer>
      </div>
      // a linha acima tbm eh do selectTest
    );
  }
}
