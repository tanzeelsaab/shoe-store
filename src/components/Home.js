import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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
  text: {
    padding: "50px",
    marginTop: window.innerWidth > 720 ? "200px" : "0px",
    color: "white",
  },
  button: {
    padding: "10px",
    margin: "10px",
    width: "68%",
  },
}));

export default function Products() {
  const classes = useStyles();
  const history = useHistory();

  const products = () => {
    history.push('/products')
  }
  return (
    <Box className={classes.alignItemsAndJustifyContent}>
      <Grid container justify="center">
        <Grid item xs={12} sm={6} className={classes.text}>
          <Typography
            variant={window.innerWidth > 720 ? "h2" : "h5"}
            gutterBottom
          >
            <strong>Explore The Horizon</strong>
          </Typography>
          <Button
            variant="contained"
            className={classes.button}
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, #019CAD,#4880EC)",
              color: "white",
              padding: "11px",
            }}
            onClick={products}
          >
            <strong>SHOP NOW</strong>
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          className={classes.alignItemsAndJustifyContentCenter}
        >
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
