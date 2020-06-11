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
    <Card
      style={{
        width: "250px",
        height: "300px",
        marginTop: "15px",
        marginRight: "15px",
      }}
    >
      <CardActionArea
        onClick={() => {
          showProductDetails(product);
        }}
      >
        <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              gutterBottom
              variant="inherit"
              component="h3"
              style={{ marginBottom: "0px", marginTop: "0px" }}
            >
              {product.name}
            </Typography>
            <Typography
              gutterBottom
              variant="inherit"
              component="h4"
              style={{ marginBottom: "0px", marginTop: "0px" }}
            >
              {`R$ ${product.price.toFixed(2)}`}
            </Typography>
          </div>
          <Typography
            gutterBottom
            variant="subtitle2"
            style={{ marginBottom: "0px", marginTop: "0px", opacity: "70%" }}
          >
            {product.category}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          style={{ width: "100%", height: "180px", marginTop: "-10px" }}
          image={product.photos[0]}
          title={product.name}
        />
      </CardActionArea>
      <CardActions>
        <Button
          style={{ fontWeight: "bold", marginTop: "-5px", width: "50%" }}
          size="small"
          color="primary"
          onClick={() => {
            showProductDetails(product);
          }}
        >
          Detalhes
        </Button>
        <Button
          style={{ fontWeight: "bold", marginTop: "-5px" }}
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
