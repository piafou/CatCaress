import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { MiaouContext } from "./MiaouContext";

export default function Level(sText, initialNumber, initialCost, initialValue) {
  const [number, setNumber] = useState(initialNumber);
  const [cost, setCost] = useState(initialCost);
  //const { context } = useContext(MiaouContext);
  const { dispatch } = useContext(MiaouContext);
  return (
    <Grid container item xs={12}>
      <Grid item xs={2}>
        {cost}
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => {
            setCost(cost + initialValue * 5); // le carresseur coutera plus cher vive le capitalisme
            setNumber(number + 1); // + 1 caresseur
            //console.log("click");
            dispatch({ type: "achat" }); //reste a faire le dispatch qui soustrait a notre compte de Miaou
          }}
          variant="contained"
          color="primary"
        >
          {sText}
        </Button>
      </Grid>
      <Grid item xs={4}>
        {number} *
      </Grid>
      <Grid item xs={2}>
        {initialValue}
      </Grid>
    </Grid>
  );
}
