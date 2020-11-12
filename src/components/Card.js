import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "20px",
    backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
  },
  alignItemsAndJustifyContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: "10px",
    margin: "10px",
    width: "68%",
  },
  CartButton: {
    padding: "10px",
    margin: "10px",
    width: "28%",
  },
}));
function Card(props) {
  const [cartAdded, setCartAdded] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const productDetails = (e) => {
    history.push(`/product/${e.currentTarget.id}`);
  };
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
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.alignItemsAndJustifyContent}>
        <img
          src={props.img}
          alt=""
          width="80%"
          style={{ transform: "rotate(-30deg)" }}
        />
      </div>
      <Typography variant="h5" gutterBottom>
        <strong>{props.product}</strong>
      </Typography>
      <Typography variant="h6" gutterBottom>
        <strong style={{ color: "#353C44" }}>{props.price}$</strong>
      </Typography>
      <div className={classes.alignItemsAndJustifyContent}>
        <Button
          variant="contained"
          className={classes.button}
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, #019CAD,#4880EC)",
            color: "white",
          }}
          id={props.id}
          onClick={productDetails}
        >
          <strong>EXPLORE</strong>
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, #019CAD,#4880EC)",
            color: "white",
            padding: "11px",
          }}
          id={props.id}
          price={props.price}
          img={props.img}
          product={props.product}
          onClick={addToCart}
          disabled={disableButton}
        >
          {cartAdded === false ? <AddShoppingCartIcon /> : "ADDED"}
        </Button>
      </div>
    </Paper>
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
export default connect(mapStateToProps, mapDispatchToProps)(Card);
