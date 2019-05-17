import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function Level(sText, initialNumber, initialCost, initialValue,Miaou,setMiaou,listLevel) {
  const [number, setNumber] = useState(initialNumber);
  const [cost, setCost] = useState(initialCost);

  function handleClick(e){
    setCost(cost + initialValue * 5); // le carresseur coutera plus cher vive le capitalisme
    setNumber(number + 1); //+1 caresseur
    setMiaou(Miaou-cost);
    listLevel.number=listLevel.number+1;
  }
 
  return (
    <Grid container item xs={12}>
      <Grid item xs={2}>
        {cost}
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={handleClick}
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


export default  Level;
