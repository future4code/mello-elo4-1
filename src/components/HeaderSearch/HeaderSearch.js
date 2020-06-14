import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { MainContainer, HeaderLogo } from "./styled";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },

  input: {
    height: "30%",
    position: "relative",
    paddingTop: "1%",
    textAlign: "center",
    marginTop: "30px",
  },

  Button: {
    color: "#fff",
  },

  searchIcon: {
    width: theme.spacing.unit * 5,
    height: "30%",
    pointerEvents: "none",
    marginTop: "5%",
    color: "#fff",
  },

  cartIcon: {
    width: theme.spacing.unit * 4,
    display: "flex",
    color: "#fff",
    height: "70px",
    marginTop: "3%",
    position: "absolute",
  },
});

function HeaderSeach(props) {
  const { setSearchInput, classes,changePage,setSelectedProduct } = props;

  return (
    <MainContainer>
      <div className={classes.root}>
        <Grid container spacing={12}>
          <Grid item xs={4}>
            <HeaderLogo src="https://trello-attachments.s3.amazonaws.com/5ee39ce81f2d0a0b33b519f5/480x480/33e1bcc413886d1aa16811d8aa04c305/logo_480.png" />
          </Grid>
          <Grid item xs={4}>
            <SearchIcon className={classes.searchIcon} />
            <input
              className={classes.input}
              placeholder="Pesquisa"
              onChange={(e) => {
                setSearchInput(e.target.value);
                changePage("productsGrid")
                setSelectedProduct(undefined)
              }}
            />
            <Button className={classes.Button}>Pesquisar</Button>
          </Grid>
          <Grid item xs={4}>
            <Badge
              className={classes.cartIcon}
              badgeContent={4}
              color="primary"
              classes={{ badge: classes.badge }}
            >
              <ShoppingCartIcon onClick={()=>{changePage("cart")}} style={{cursor:"pointer"}}/>
            </Badge>
          </Grid>
        </Grid>
      </div>
    </MainContainer>
  );
}
HeaderSeach.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderSeach);
