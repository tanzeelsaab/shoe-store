import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";

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
    marginTop: "250px",
  },
}));

export default function Products() {
  const classes = useStyles();

  return (
    <Box
      style={{ maxWidth: "98%" }}
      className={classes.alignItemsAndJustifyContent}
    >
      <Grid container justify="center">
        <Grid item xs={10}>
          <Grid container spacing={2} justify="center">
            {dummyData.map((key, index) => {
              return (
                <Grid item xs={12} sm={4} key={index}>
                  <Card
                    img={key.img}
                    price={key.price}
                    product={key.product}
                    id={key.id}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
