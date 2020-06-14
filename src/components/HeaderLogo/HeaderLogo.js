import React from "react";
import { MainContainer, HeaderLogo } from "./styled";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },

  logo: {
    width: theme.spacing.unit * 6,
    height: "140%",
    marginTop: "5%",
    color: "#fff",
  },
});

function Header(props) {
  const { classes } = props;

  return (
    <MainContainer>
      <div className={classes.root}>
        <Grid container spacing={12}>
          <Grid item xs={5}>
            <HeaderLogo
              className={classes.logo}
              src="https://trello-attachments.s3.amazonaws.com/5ee39ce81f2d0a0b33b519f5/480x480/33e1bcc413886d1aa16811d8aa04c305/logo_480.png"
            />
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
