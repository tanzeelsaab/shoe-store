import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

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

function Product(props) {
  const [cartAdded, setCartAdded] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const classes = useStyles();

  const addToCart = (e) => {
    setCartAdded(true);
    setDisableButton(true);
    props.ADD_TO_CART({
      name: e.currentTarget.getAttribute("product"),
      unitPrice: e.currentTarget.getAttribute("price"),
      price: e.currentTarget.getAttribute("price"),
      img: e.currentTarget.getAttribute("img"),
      id: e.currentTarget.id,
      quantity: 1,
    });
  };

  return (
    <Box className={classes.alignItemsAndJustifyContent}>
      {dummyData
        .filter((key) => key.id === props.match.params.id)
        .map((key, index) => {
          return (
            <Grid container justify="center" key={index}>
              <Grid item xs={12} sm={6} className={classes.text}>
                <Typography variant="h2" gutterBottom>
                  <strong>{key.product}</strong>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  blanditiis tenetur unde suscipit, quam beatae rerum inventore
                  consectetur, neque doloribus, cupiditate numquam dignissimos
                  laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <strong>${key.price}</strong>
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
                  id={key.id}
                  price={key.price}
                  img={key.img}
                  product={key.product}
                  onClick={addToCart}
                  disabled={disableButton}
                >
                  <strong>
                    {cartAdded === false ? "ADD TO CART" : "ADDED"}
                  </strong>
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={classes.alignItemsAndJustifyContentCenter}
              >
                <img
                  src={key.img}
                  alt=""
                  width="80%"
                  style={{ transform: "rotate(0deg)" }}
                />
              </Grid>
            </Grid>
          );
        })}
    </Box>
  );
}
const mapStateToProps = (state) => {
  return {
    total_products: state.total_products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ADD_TO_CART: (data) => {
      dispatch({ type: "ADD_TO_CART", payload: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
