import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundImage: "linear-gradient(to right bottom, #019CAD,#4880EC)",
    color: "white",
    fontSize: 24,
    fontFamily: "bold",
  },
  body: {
    fontSize: 24,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  alignItemsAndJustifyContent: {
    width: "100%",
    height: window.innerHeight * 0.8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
  },
});

function CartItems(props) {
  const classes = useStyles();
  const increase = (e) => {
    props.ADD_QUANTITY(e.currentTarget.id);
  };
  const removeFromCart = (e) => {
    props.REMOVE_FROM_CART(e.currentTarget.id);
  };
  const decrease = (e) => {
    props.MINUS_QUANTITY(e.currentTarget.id);
  };
  return (
    <TableContainer
      component={Paper}
      style={
        window.innerWidth < 720
          ? { marginTop: "100px" }
          : { marginTop: "150px" }
      }
    >
      {props.products.length === 0 ? (
        <div className={classes.alignItemsAndJustifyContent}>
          <h2>Your cart is empty</h2>
        </div>
      ) : (
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Product Image</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.products.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">
                  <img src={row.img} height="60px" width="60px" alt="" />
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.price}</StyledTableCell>
                <StyledTableCell align="center">
                  <ButtonGroup
                    color="secondary"
                    aria-label="outlined primary button group"
                  >
                    <Button onClick={decrease} id={row.id}>
                      -
                    </Button>
                    <Button>{row.quantity}</Button>
                    <Button onClick={increase} id={row.id}>
                      +
                    </Button>
                  </ButtonGroup>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    onClick={removeFromCart}
                    id={row.id}
                    aria-label="delete"
                    className={classes.margin}
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    total_products: state.total_products,
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    REMOVE_FROM_CART: (data) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: data });
    },
    ADD_QUANTITY: (data) => {
      dispatch({ type: "ADD_QUANTITY", payload: data });
    },
    MINUS_QUANTITY: (data) => {
      dispatch({ type: "MINUS_QUANTITY", payload: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
