import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { TextField } from "@material-ui/core";
import {
  MainContainer,
  CategoriesContainer,
  Scroll,
  SelectContainer,
  ProductsContainer,
} from "./styled";



function ProductsGrid(props) {
  const {
    products,
    setCategory,
    setMinPrice,
    setMaxPrice,
    setSort,
    setSelectedProduct,
    changePage,
    addProductToCart,
  } = props;

  const renderedProducts = products.map((item) => (
    <ProductCard
      key={item.id}
      product={item}
      setSelectedProduct={setSelectedProduct}
      changePage={changePage}
      addProductToCart={addProductToCart}
    />
  ));

  const renderedCategories = products
    .filter(
      (product, index, array) =>
        array.findIndex((item) => item.category === product.category) === index
    )
    .map((item) => (
      <div
        key={item.id}
        onClick={() => {
          setCategory(item.category);
        }}
      >
        {item.category}
      </div>
    ));

  return (
    <MainContainer>
      {/* Inicio categorias */}
      <CategoriesContainer>
        <TextField
          label="Min"
          type="number"
          fullWidth
          defaultValue={0}
          onChange={(e) => {
            setMinPrice(e.target.value);
          }}
        />
        <TextField
          label="Max"
          type="number"
          defaultValue={100}
          onChange={(e) => {
            setMaxPrice(e.target.value);
          }}
        />
        {renderedCategories}
        <div
          item
          onClick={() => {
            setCategory("");
          }}
        >
          Voltar
        </div>
      </CategoriesContainer>
      {/* Fim categorias */}
      <div>
        <SelectContainer>
          <p>Produtos encontrados: {products.length}</p>
          <select
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option disabled selected>
              Ordenar
            </option>
            <option value="nameAsc">Nome crescente</option>
            <option value="nameDec">Nome decrescente</option>
            <option value="categoryAsc">Categoria crescente</option>
            <option value="categoryDec">Categoria decrescente</option>
            <option value="priceAsc">Preco crescente</option>
            <option value="priceDec">Preco decrescente</option>
          </select>
        </SelectContainer>
        <Scroll>
          <ProductsContainer>{renderedProducts}</ProductsContainer>
        </Scroll>
      </div>
    </MainContainer>
  );
}

export default ProductsGrid;
