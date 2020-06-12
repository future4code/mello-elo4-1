import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

function StyledCart2(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <img src="https://picsum.photos/200"></img>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <img src="https://picsum.photos/200"></img>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
    </React.Fragment>
  );
}

StyledCart2.propTypes = {
  classes: PropTypes.object.isRequired,
};

function NestedGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid container item xs={12} spacing={24}>
          <StyledCart2 classes={classes} />
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <StyledCart2 classes={classes} />
        </Grid>
        <Grid container item xs={12} spacing={24}>
          <StyledCart2 classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(NestedGrid);
