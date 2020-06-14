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
  grid-template-rows: 100px 1fr 200px;
  width: 100%;
  height: 100vh;
  gap: 10px;
`;

let defaultMaxPrice, defaultMinPrice;

export class AppContainer extends Component {
  state = {
    displayPage: "login", // Opcoes: login, productGrid, productDetail, cart, addProduct
    products: [],
    cart: [],
    category: "",
    minPrice: 0,
    maxPrice: 0,
    searchInput: "",
    selectedProduct: undefined,
    sortOption: "",
    installments: 1,
  };

  getAllProducts = async () => {
    try {
      const response = await axios.get(urlElo4);
      defaultMaxPrice = 0;
      response.data.products.forEach((item) => {
        defaultMaxPrice =
          item.price > defaultMaxPrice ? item.price : defaultMaxPrice;
      });
      defaultMinPrice = defaultMaxPrice;
      response.data.products.forEach((item) => {
        defaultMinPrice =
          item.price < defaultMinPrice ? item.price : defaultMinPrice;
      });
      this.setState({
        products: response.data.products,
      });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.getAllProducts();
    const cartStr = localStorage.getItem("melloFourOneCart");
    if (cartStr) {
      const cartObj = JSON.parse(cartStr);
      this.setState({ cart: cartObj });
    }
  }

  addProductToCart = (product) => {
    const newCart = [...this.state.cart, product];
    localStorage.setItem("melloFourOneCart", JSON.stringify(newCart));
    this.setState({ cart: newCart });
  };

  removeFromCart = (id, removeAll) => {
    let newCart = this.state.cart.reverse();
    if (removeAll) {
      newCart = newCart.filter((product) => product.id !== id);
    } else {
      newCart.splice(
        newCart.findIndex((item) => item.id === id),
        1
      );
    }
    newCart.reverse();
    localStorage.setItem("melloFourOneCart", JSON.stringify(newCart));
    this.setState({ cart: newCart });
  };

  changePage = (page) => {
    if (this.state.displayPage === "cart" && page === "cart") {
      if (this.state.selectedProduct) {
        this.setState({ displayPage: "productDetails" });
      } else {
        this.setState({ displayPage: "productsGrid" });
      }
    } else {
      this.setState({ displayPage: page });
    }
  };

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

  changeInstallments = (event) => {
    const numberInstallments = event.target.value;
    this.setState({ installments: numberInstallments });
  };

  setStateCart = () => {
    this.setState({ cart: [] });
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
        return <LoginPage changePage={this.changePage} />;
      case "productsGrid":
        return (
          <ProductsGrid
            products={this.filterSearchSortProducts()}
            setCategory={this.setCategory}
            setMinParent={this.setMinPrice}
            setMaxParent={this.setMaxPrice}
            defaultMaxPrice={defaultMaxPrice}
            defaultMinPrice={defaultMinPrice}
            setSort={this.setSortOption}
            setSelectedProduct={this.setSelectedProduct}
            changePage={this.changePage}
            addProductToCart={this.addProductToCart}
          />
        );
      case "productDetails":
        return (
          <ProductDetails
            product={this.state.selectedProduct}
            changePage={this.changePage}
            setCategory={this.setCategory}
            addProductToCart={this.addProductToCart}
            setSelectedProduct={this.setSelectedProduct}
          />
        );
      case "cart":
        return (
          <Cart
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            addProductToCart={this.addProductToCart}
            changePage={this.changePage}
            installments={this.state.installments}
            changeInstallments={this.changeInstallments}
            setStateCart={this.setStateCart}
            setSelectedProduct={this.setSelectedProduct}
          />
        );
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
      return (
        <HeaderSearch
          setSearchInput={this.setSearchInput}
          changePage={this.changePage}
          setSelectedProduct={this.setSelectedProduct}
          cartCounter={this.state.cart.length}
        />
      );
    } else {
      return <HeaderLogo />;
    }
  };

  render() {
    return (
      <MainContainer>
        {this.renderHeader()}
        {this.renderComponent()}
        <Footer />
      </MainContainer>
    );
  }
}
