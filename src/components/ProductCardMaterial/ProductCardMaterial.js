import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

function ProductCardMaterial(props) {
  const { product, setSelectedProduct, changePage, addProductToCart } = props;

  function showProductDetails(product) {
    setSelectedProduct(product);
    changePage("productDetails");
  }

  return (
    <Card style={{ width: "250px", height: "300px", marginTop: "15px" }}>
      <CardActionArea
        onClick={() => {
          showProductDetails(product);
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h7"
            component="h3"
            style={{ marginBottom: "0px", marginTop: "0px" }}
          >
            {product.name}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          style={{ width: "100%", height: "180px" }}
          image={product.photos[0]}
          title={product.name}
        />
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            showProductDetails(product);
          }}
        >
          Detalhes
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            addProductToCart(product);
          }}
        >
          Adicionar ao carrinho
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCardMaterial;
