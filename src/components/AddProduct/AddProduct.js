import React from "react";
import { MainContainer } from "./styled";
import { InputModelo1 } from "./styled";
import Button from "@material-ui/core/Button";
import axios from "axios";

class AddProduct extends React.Component {
  state = {
    name: "",
    description: "",
    price: "",
    paymentMethod: "",
    category: "",
    photos: [],
    installments: "",
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  handlePaymentMethodChange = (event) => {
    this.setState({ paymentMethod: event.target.value });
  };

  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  };

  handlePhotosChange = (event) => {
    this.setState({ photos: event.target.value });
  };

  handleInstallmentsChange = (event) => {
    this.setState({ installments: event.target.value });
  };

  addProduct = () => {
    const body = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      paymentMethod: this.state.paymentMethod,
      category: this.state.category,
      photos: [this.state.photos],
      installments: this.state.installments,
    };

    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products";

    axios
      .post(url, body)
      .then(() => {
        alert(`Produto ${this.state.name} criado com sucesso!`);
      })
      .catch((erro) => {
        alert("Erro ao criar o produto!");
        console.log(erro);
      });
  };

  render() {
    return (
      <MainContainer>
        <h2>cadastro de produto</h2>
        <label>Nome:</label>
        <InputModelo1
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <label>Desrição:</label>
        <InputModelo1
          onChange={this.handleDescriptionChange}
          value={this.state.description}
        />
        <label>
          Preço:
          <input
            type="number"
            onChange={this.handlePriceChange}
            value={this.state.price}
          />
        </label>
        <label>
          Método de pagamento:
          <input
            onChange={this.handlePaymentMethodChange}
            value={this.state.paymentMethod}
          />
        </label>
        <label>
          Categoria:
          <input
            onChange={this.handleCategoryChange}
            value={this.state.category}
          />
        </label>
        <label>
          imagem do produto:
          <InputModelo1
            onChange={this.handlePhotosChange}
            value={this.state.photos}
          />
        </label>
        <label>
          Prestações:
          <input
            type="number"
            onChange={this.handleInstallmentsChange}
            value={this.state.installments}
          />
        </label>
        <Button onClick={this.addProduct} variant="contained" color="primary">
          Cadastrar produto
        </Button>
      </MainContainer>
    );
  }
}

export default AddProduct;
