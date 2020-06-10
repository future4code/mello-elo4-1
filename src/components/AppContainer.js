import React, { Component } from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import Footer from "./Footer/Footer";
import LoginPage from "./LoginPage/LoginPage";
import ProductsGrid from "./ProductsGrid/ProductsGrid";
import ProductDetails from "./ProductDetails/ProductDetails";
import Cart from "./Cart/Cart";
import AddProduct from "./AddProduct/AddProduct";
import axios from "axios";

const urlElo4 =
  "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 80px;
  width: 100%;
  height: 100vh;
  margin: auto;
  margin-top: 20px;
`;

export class AppContainer extends Component {
  state = {
    displayPage: "productsGrid", // Opcoes: login, productGrid, productDetail, cart, supplierList, addProduct
    products: [],
    cart: [],
    category: "",
    minPrice: 0,
    maxPrice: 0,
    searchInput: "",
    selectedProduct: undefined,
    sortOption: "",
  };

  getAllProducts = async () => {
    try {
      const response = await axios.get(urlElo4);
      this.setState({ products: response.data.products });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.getAllProducts();
  }

  changePage = (page)=>{
    this.setState({displayPage: page})
  }

  setCategory = (name) => {
    this.setState({ category: name });
  };

  setMinPrice = (value) => {
    this.setState({ minPrice: value });
  };

  setMaxPrice = (value) => {
    this.setState({ maxPrice: value });
  };

  setSearchInput = (value) => {
    this.setState({ searchInput: value });
  };

  setSortOption = (value) => {
    this.setState({ sortOption: value });
  };

  setSelectedProduct = (product) => {
    this.setState({ selectedProduct: product });
  };

  addProductToCart = (product) => {
    const newCart = [...this.state.cart, product];
    this.setState({ cart: newCart });
  };

  filterSearchSortProducts = () => {
    let filteredProducts = this.state.products;
    if (this.state.category) {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.category.toLowerCase() === this.state.category.toLowerCase()
      );
    }
    if (this.state.minPrice) {
      filteredProducts = filteredProducts.filter(
        (item) => item.price >= this.state.minPrice
      );
    }
    if (this.state.maxPrice) {
      filteredProducts = filteredProducts.filter(
        (item) => item.price <= this.state.maxPrice
      );
    }
    if (this.state.searchInput) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
      );
    }
    if (this.state.sortOption === "nameAsc") {
      filteredProducts.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
    }
    if (this.state.sortOption === "nameDec") {
      filteredProducts.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
      );
    }
    if (this.state.sortOption === "categoryAsc") {
      filteredProducts.sort((a, b) =>
        a.category.toLowerCase() > b.category.toLowerCase() ? 1 : -1
      );
    }
    if (this.state.sortOption === "categoryDec") {
      filteredProducts.sort((a, b) =>
        a.category.toLowerCase() > b.category.toLowerCase() ? -1 : 1
      );
    }
    if (this.state.sortOption === "priceAsc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    }
    if (this.state.sortOption === "priceDec") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
    return filteredProducts;
  };

  renderComponent = () => {
    switch (this.state.displayPage) {
      case "login":
        return <LoginPage changePage={this.changePage}/>;
      case "productsGrid":
        return (
          <ProductsGrid
            products={this.filterSearchSortProducts()}
            setCategory={this.setCategory}
            setMinPrice={this.setMinPrice}
            setMaxPrice={this.setMaxPrice}
            setSort={this.setSortOption}
            setSelectedProduct={this.setSelectedProduct}
            addProductToCart={this.addProductToCart}
          />
        );
      case "productDetails":
        return <ProductDetails />;
      case "cart":
        return <Cart />;
      case "addProduct":
        return <AddProduct />;
      default:
        break;
    }
  };

  renderHeader = () => {
    if (
      this.state.displayPage === "productsGrid" ||
      this.state.displayPage === "productDetails" ||
      this.state.displayPage === "cart"
    ) {
      return <HeaderSearch setSearchInput={this.setSearchInput} />;
    } else {
      return <HeaderLogo />;
    }
  };

  // Isso eh soh para mudarmos de pagina no teste, vai ser excluido
  handleSelecTest = (e) => {
    this.setState({ displayPage: e.target.value });
  };
  selectTest = (
    <select defaultValue={"productsGrid"} onChange={this.handleSelecTest}>
      <option value="login">login</option>
      <option value="productsGrid">productsGrid</option>
      <option value="productDetails">productDetails</option>
      <option value="cart">cart</option>
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
