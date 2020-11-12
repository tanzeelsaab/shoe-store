import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(3),
    textAlign: "center",
  },
  alignItemsAndJustifyContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
    height: window.innerHeight,
  },
  alignItemsAndJustifyContentCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Products() {
  const classes = useStyles();
  return (
    <Box className={classes.alignItemsAndJustifyContent}>
      <Grid container justify="center">
        <Grid item xs={12} sm={6} className={classes.alignItemsAndJustifyContentCenter}>
          helloworld
        </Grid>
        <Grid item xs={12} sm={6} className={classes.alignItemsAndJustifyContentCenter}>
        <img
          src="http://shoe-store-react-app.surge.sh/static/media/homeShoe.1427e572.png"
          alt=""
          width="80%"
          style={{ transform: "rotate(0deg)" }}
        />
        </Grid>
      </Grid>
    </Box>
  );
}
