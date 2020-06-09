import React from "react";
//import { MainContainer, Categories, Products } from "./styled";
import { Grid } from "@material-ui/core";

function ProductsGrid(props) {
  const { products, setCategory } = props;

  const renderedProducts = products.map((item) => (
    <Grid key={item.id} item xs={4}>
      {item.name}
    </Grid>
  ));

  const renderedCategories = products
    .filter(
      (product, index, array) =>
        array.findIndex((item) => item.category === product.category) === index
    )
    .map((item) => (
      <Grid key={item.id} item onClick={()=>{setCategory(item.category)}}>
        {item.category}
      </Grid>
    ));


  return (
    <Grid container spacing={8}>
      <Grid container item xs={3} direction={"column"}>
        {renderedCategories}<Grid item onClick={()=>{setCategory("")}}>Voltar</Grid>
      </Grid>
      <Grid container item xs={9} spacing={40}>
        {renderedProducts}
      </Grid>
    </Grid>
  );
}

export default ProductsGrid;
