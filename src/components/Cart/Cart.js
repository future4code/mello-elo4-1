import React from "react";
import { MainContainer } from "./styled";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
//Testes do Material UI
import StyledCart from "./StyledCart";
import StyledCart2 from "./StyledCart2";
//Imports Do Material UI-GRID
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { red } from "@material-ui/core/colors";

const BackgroundColor = styled.div`
  background-color: #33525b;
`;

const ButtonColor = styled(Button)`
  background-color: #584da8;
  color: white;
`;

const GridTest = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

function finishAlert() {
  alert("Compra finalizada com sucesso!");
}

function Cart(props) {
  const { cart, removeFromCart, classes } = props;

  const newListCart = [];
  let total = 0;
  cart.forEach((product) => {
    total += product.price;
    const checkProduct = newListCart.findIndex(
      (prod) => prod.id === product.id
    );
    if (checkProduct === -1) {
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        photo: product.photos,
        amount: 1,
      };
      newListCart.push(newProduct);
    } else {
      newListCart[checkProduct].amount++;
    }
  });
  //// Esquema do Material UI que se encontra no StyledCart
  const renderedCart = newListCart.map((product) => (
    <div>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={16}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt={product.name}
                  src={product.photo}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {product.name}
                  </Typography>
                  <Typography gutterBottom>
                    Quantidade: X{product.amount}
                  </Typography>
                </Grid>
                <Grid item>
                  <ButtonColor
                    variant="contained"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Excluir Produto
                  </ButtonColor>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">R$:{product.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  ));

  return (
    <BackgroundColor>
      <div>
        <h1>Carrinho</h1>
        <GridTest>{renderedCart}</GridTest>
        <hr />
        <h1>TOTAL:{total}</h1>
        <ButtonColor onClick={finishAlert}>Finalizar Compra</ButtonColor>
      </div>
    </BackgroundColor>
  );
}
// Esquema do Material UI que se encontra no StyledCart
export default withStyles(styles)(Cart);

/*Antigo código do MAP
<p>
      {product.name}&nbsp;X{product.amount}&nbsp;R$:{product.price}&nbsp;Foto:
      <img
        style={{ width: "300px", height: "200px" }}
        src={product.photo}
        alt={product.name}
      ></img>
      <br></br>
      <ButtonColor
        variant="contained"
        onClick={() => removeFromCart(product.id)}
      >
        Excluir Produto
      </ButtonColor>
      <StyledCart />
    </p>
*/
