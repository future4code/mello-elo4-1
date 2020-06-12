import React from "react";
import { MainContainer, HeaderLogo } from "./styled";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  logo: {
    width: theme.spacing.unit * 6,
    height: '140%',
    marginTop: '5%',
    color: "#fff",
  },
});

function Header (props)  {
  const { classes } = props;

  return (
    <MainContainer>
    <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid item xs={5}>
          <HeaderLogo className={classes.logo} src="https://files.slack.com/files-tmb/TLAVDH7C2-F0153ASNQKC-2ebeaa58c2/logo_480.png" />
        </Grid>
        <Grid item xs={7}>
          <h2>CADASTRO DE FORNECEDORES</h2>
        </Grid>
      </Grid>
    </div>
    </MainContainer>
  );
}  
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
