import React from "react";
import { ProductCard } from "./styled";
import { Grid, TextField } from "@material-ui/core";

function ProductsGrid(props) {
  const { products, setCategory, setMinPrice, setMaxPrice } = props;

  const sortedProducts = products.sort((a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
  );

  const renderedProducts = sortedProducts.map((item) => (
    <Grid key={item.id} item xs={4}>
      {`${item.name} R$${item.price.toFixed(2)}`}
    </Grid>
  ));

  const renderedCategories = products
    .filter(
      (product, index, array) =>
        array.findIndex((item) => item.category === product.category) === index
    )
    .map((item) => (
      <Grid
        key={item.id}
        item
        onClick={() => {
          setCategory(item.category);
        }}
      >
        {item.category}
      </Grid>
    ));

  return (
    <Grid container spacing={8}>
      <Grid container item xs={3} direction={"column"}>
        <TextField
          label="Min"
          type="number"
          defaultValue={1}
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
      </Grid>
      <Grid container item xs={9} spacing={40}>
        {renderedProducts}
      </Grid>
    </Grid>
  );
}

export default ProductsGrid;
