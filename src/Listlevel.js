import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";


export default function Listlevel(initNiveau,levels,Miaou,setMiaou){
    const [niveau, setNiveau] = useState(initNiveau);
    return(
          <Grid container item xs={8} spacing={8}>
          {/*entete level */}
          <Grid container item xs={12}>
            <Grid item xs={2}>
              Coût.
            </Grid>
            <Grid item xs={4}>
              Carresseur
            </Grid>
            <Grid item xs={4}>
              Nombre
            </Grid>
            <Grid item xs={2}>
              Valeur
            </Grid>
          </Grid>
          {/*les levels*/}
          {levels.map(levels =>
            levels.id > level ? (
              <Grid container item xs={12} key={levels.id} />
            ) : (
                Level( levels.label, levels.nombre, levels.cost, levels.valeur,Miaou,setMiaou)
                //<Level sText={levels.label} initialNumber={levels.nombre} initialCost={levels.cost} initialValue={levels.valeur}/>
                //sText, initialNumber, initialCost, initialValue
            )
          )}
        </Grid>
        );
    }