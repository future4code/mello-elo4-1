import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { TextField } from "@material-ui/core";
import {
  MainContainer,
  CategoriesContainer,
  Scroll,
  SelectContainer,
  ProductsContainer,
  Category,
} from "./styled";
import ProductCardMaterial from "../ProductCardMaterial/ProductCardMaterial";


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

  let max = 0;
  const renderedProducts = products.map((item) => {
    max = item.price > max ? (max = item.price) : max;
    return (
      <ProductCardMaterial
        key={item.id}
        product={item}
        setSelectedProduct={setSelectedProduct}
        changePage={changePage}
        addProductToCart={addProductToCart}
      />
    );
  });

  const renderedCategories = products
    .filter(
      (product, index, array) =>
        array.findIndex((item) => item.category === product.category) === index
    )
    .sort((a, b) =>
      a.category.toLowerCase() > b.category.toLowerCase() ? 1 : -1
    )
    .map((item) => (
      <Category
        key={item.id}
        onClick={() => {
          setCategory(item.category);
        }}
      >
        {item.category}
      </Category>
    ));

  return (
    <MainContainer>
      {/* Inicio categorias */}
      <CategoriesContainer>
        <TextField
          label="Min"
          type="number"
          fullWidth
          defaultValue={1}
          // inputProps={{ min: "0", max: max, step: "1" }}
          onChange={(e) => {
            setMinPrice(e.target.value);
          }}
        />
        <TextField
          label="Max"
          type="number"
          defaultValue={60} // Nao esta funcionando =/
          // inputProps={{ min: "0", max: max, step: "1" }}
          onChange={(e) => {
            setMaxPrice(e.target.value);
          }}
        />
        {renderedCategories}
        <div
          style={{ cursor: "pointer", marginTop: "5px" }}
          onClick={() => {
            setCategory("");
          }}
        >
          Todas
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
