import React, { useState, useEffect } from "react";
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
    defaultMaxPrice,
    defaultMinPrice,
    setSort,
    setSelectedProduct,
    changePage,
    addProductToCart,
  } = props;

  const [defaultMax, setMax] = useState(1);
  function setDefaultMax(event) {
    setMax(event.target.value);
    setMaxPrice(event.target.value);
  }
  useEffect(() => {
    setMax(defaultMaxPrice);
  }, [defaultMaxPrice]);

  const [defaultMin, setMin] = useState(1);
  function setDefaultMin(event) {
    setMin(event.target.value);
    setMinPrice(event.target.value);
  }
  useEffect(() => {
    setMin(defaultMinPrice);
  }, [defaultMinPrice]);

  const renderedProducts = products.map((item) => {
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
          style={{ width: "100px" }}
          label="Valor mínimo"
          type="number"
          value={defaultMin}
          inputProps={{ min: defaultMinPrice, max: defaultMax, step: "1" }}
          onChange={setDefaultMin}
        />
        <TextField
          style={{ width: "100px" }}
          label="Valor máximo"
          type="number"
          value={defaultMax}
          inputProps={{ min: defaultMin, max: defaultMaxPrice, step: "1" }}
          onChange={setDefaultMax}
        />
        {renderedCategories}
        <Category
          onClick={() => {
            setCategory("");
          }}
        >
          Todas
        </Category>
      </CategoriesContainer>
      {/* Fim categorias */}
      <div>
        <SelectContainer>
          <p style={{ fontSize: "17px" }}>
            {products.length} produtos encontrados
          </p>
          <select
            defaultValue="disabled"
            onChange={(e) => {
              setSort(e.target.value);
            }}
            style={{ height: "25px", fontSize: "14px" }}
          >
            <option value="disabled" disabled>
              Organizar anúncios
            </option>
            <option value="priceAsc">Menor preço</option>
            <option value="priceDec">Maior preço</option>
            <option value="nameAsc">Nome A-Z</option>
            <option value="nameDec">Nome Z-A</option>
            <option value="categoryAsc">Categoria A-Z</option>
            <option value="categoryDec">Categoria Z-A</option>
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
