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
    setMinParent,
    setMaxParent,
    defaultMaxPrice,
    defaultMinPrice,
    setSort,
    setSelectedProduct,
    changePage,
    addProductToCart,
  } = props;

  const [maxInput, setMaxInput] = useState(1);
  useEffect(() => {
    setMaxInput(defaultMaxPrice);
  }, [defaultMaxPrice]);

  function setMaxPrice(event) {
    setMaxInput(event.target.value);
    setMaxParent(event.target.value);
  }

  const [minInput, setMinInput] = useState(1);
  useEffect(() => {
    setMinInput(defaultMinPrice);
  }, [defaultMinPrice]);
  
  function setMinPrice(event) {
    setMinInput(event.target.value);
    setMinParent(event.target.value);
  }


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
          value={minInput}
          inputProps={{ min: defaultMinPrice, max: maxInput, step: "1" }}
          onChange={setMinPrice}
        />
        <TextField
          style={{ width: "100px" }}
          label="Valor máximo"
          type="number"
          value={maxInput}
          inputProps={{ min: minInput, max: defaultMaxPrice, step: "1" }}
          onChange={setMaxPrice}
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
          <ProductsContainer>{renderedProducts}</ProductsContainer>
      </div>
    </MainContainer>
  );
}

export default ProductsGrid;
