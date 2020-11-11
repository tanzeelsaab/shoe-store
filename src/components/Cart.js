import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { dummyData } from "../config/dummyData";

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
    height:
      window.innerWidth > 720 ? window.innerHeight : window.innerHeight * 2,
  },
  alignItemsAndJustifyContentCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: "50px",
    marginTop: window.innerWidth > 720 ? "200px" : "0px",
  },
  button: {
    padding: "10px",
    margin: "10px",
    width: "68%",
  },
}));

export default function Products(props) {
  const classes = useStyles();
  return (
    <Box className={classes.alignItemsAndJustifyContent}>
     
            <Grid container justify="center">
              <Grid item xs={12} sm={6} className={classes.alignItemsAndJustifyContentCenter}>
              <img
                  src="http://shoe-store-react-app.surge.sh/static/media/homeShoe.1427e572.png"
                  alt=""
                  width="80%"
                  style={{ transform: "rotate(0deg)" }}
                />
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
