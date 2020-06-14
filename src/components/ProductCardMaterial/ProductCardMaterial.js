import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function ProductCardMaterial(props) {
  const { product, setSelectedProduct, changePage, addProductToCart } = props;

  function showProductDetails(product) {
    setSelectedProduct(product);
    changePage("productDetails");
  }

  return (
    <Card
      elevation={7}
      style={{
        width: "250px",
        height: "350px",
        marginTop: "15px",
        marginRight: "15px",
      }}
    >
      <div style={{ height: "290px" }}>
        <CardActionArea
          onClick={() => {
            showProductDetails(product);
          }}
        >
          <CardMedia
            style={{ width: "100%", height: "180px" }}
            image={product.photos[0]}
            title={product.name}
          />
          <CardContent>
            <Typography
              variant="inherit"
              component="h3"
              style={{ wordWrap: "break-word" }}
            >
              {product.name}
            </Typography>
            <Typography variant="inherit" component="h4">
              {`R$ ${parseFloat(product.price).toFixed(2)}`}
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                opacity: "70%",
                wordWrap: "break-word",
              }}
            >
              {product.category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </div>
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
