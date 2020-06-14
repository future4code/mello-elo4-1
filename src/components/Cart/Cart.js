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
  background-color: white;
`;

const ButtonColor = styled(Button)`
  background-color: #584da8;
  color: white;
`;

const ButtonColor2 = styled(Button)`
  color: #584da8;
`;

const FlexCart = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexTotal = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: "100%",
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
  const {
    cart,
    removeFromCart,
    addProductToCart,
    classes,
    changePage,
    parcelas,
    mudarParcelas,
    setStateCart,
  } = props;
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
        photos: product.photos,
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
                  src={product.photos}
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
                    onClick={() => removeFromCart(product.id, false)}
                  >
                    -
                  </ButtonColor>
                  <ButtonColor
                    variant="contained"
                    onClick={() => addProductToCart(product)}
                  >
                    +
                  </ButtonColor>
                  <ButtonColor2
                    variant="outlined"
                    onClick={() => removeFromCart(product.id, true)}
                  >
                    Excluir
                  </ButtonColor2>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Preço Unitário:R${product.price}
                </Typography>
                <Typography variant="subtitle1">
                  Preço Total:R${product.price * product.amount}
                </Typography>
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
        <FlexCart>{renderedCart}</FlexCart>
        <hr />
        <FlexCart>
          <h3>
            <span>Valor parcelado : R${total / parcelas}</span>
          </h3>
          <h3>
            <label>Número de Parcelas:</label>
            <span>
              <select onChange={mudarParcelas}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </span>
          </h3>
        </FlexCart>

        <FlexTotal>
          <ButtonColor
            size="large"
            variant="contained"
            onClick={() => {
              changePage("productsGrid");
            }}
          >
            Continuar Comprando
          </ButtonColor>
          <ButtonColor
            size="large"
            variant="contained"
            onClick={() => {
              finishAlert(undefined);
              changePage("productsGrid");
              setStateCart();
            }}
          >
            Finalizar Compra
          </ButtonColor>
          <h1>Total da Compra:{total}</h1>
        </FlexTotal>
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
