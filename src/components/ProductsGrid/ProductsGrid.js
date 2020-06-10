import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Grid, TextField } from "@material-ui/core";
import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Scroll = styled.div`
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid red;
  height: 30px;
  align-items: center;
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100%;
  flex-wrap: wrap;
`;

function ProductsGrid(props) {
  const { products, setCategory, setMinPrice, setMaxPrice, setSort } = props;

  const renderedProducts = products.map((item) => (
    <ProductCard key={item.id} product={item} />
  ));

  const renderedCategories = products
    .filter(
      (product, index, array) =>
        array.findIndex((item) => item.category === product.category) === index
    )
    .map((item) => (
      <div
        key={item.id}
        item
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
        <Grid
          item
          onClick={() => {
            setCategory("");
          }}
        >
          Voltar
        </Grid>
      </CategoriesContainer>
      {/* Fim categorias */}
      <Scroll>
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
        <ProductsContainer>{renderedProducts}</ProductsContainer>
      </Scroll>
    </MainContainer>
  );
}

export default ProductsGrid;
