import React from "react";
import Grid from "@material-ui/core/Grid";
import Table from "../Table";

function InteractiveList(props) {

  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={10} md={6}>
          <Table />
        </Grid>
      </Grid>
    </div>
  );
}

export default InteractiveList;
