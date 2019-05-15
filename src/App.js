/* 
-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-

Jeu : un clique sur le bouton miaou rapporte 1 Miaou (ou sur le chat)
Avec les Miaous on peux acheter des caresseurs qui nous rapporterons des Miaous toutes les secondes. 

les carresseurs s'achete en miaou (cout) qui augmente à chaque achat
ils rapportent toutes les secondes nombre*valeur

-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-
*/

import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import cat1 from "./images/cat1.png";
import cat2 from "./images/cat2.png";
import cat3 from "./images/cat3.png";
import useInterval from "./UseInterval.js";

// les niveaux
const levels = [
  { id: 1, label: "Puces", cost: 10, nombre: 0, valeur: 1 },
  { id: 2, label: "Mamie", cost: 100, nombre: 0, valeur: 10 },
  { id: 3, label: "bras robotisé", cost: 1000, nombre: 0, valeur: 100 },
  { id: 4, label: "Usine Caline", cost: 10000, nombre: 0, valeur: 1000 },
  {
    id: 5,
    label: "Ville des caresses",
    cost: 100000,
    nombre: 0,
    valeur: 10000
  },
  {
    id: 6,
    label: "Big caresse center",
    cost: 1000000,
    nombre: 0,
    valeur: 100000
  },
  {
    id: 7,
    label: "Pays des caresses",
    cost: 10000000,
    nombre: 0,
    valeur: 1000000
  },
  {
    id: 8,
    label: "Planete des caresses",
    cost: 100000000,
    nombre: 0,
    valeur: 10000000
  },
  {
    id: 9,
    label: "Galaxie des caresses",
    cost: 1000000000,
    nombre: 0,
    valeur: 100000000
  },
  {
    id: 10,
    label: "Dev react",
    cost: 10000000000,
    nombre: 0,
    valeur: 1000000000
  }
];

// calcul des dividendes
function getMiaou(Miaou, levels) {
  let somme = 0;
  levels.map(level => (somme = somme + level.valeur * level.nombre));
  return Miaou + somme;
}

//MAIN
function App() {
  // la monnaie du jeu
  const [Miaou, setMiaou] = useState(0);
  const [clicked, setClick] = useState(false);
  const [level, setLevel] = useState(1);
  const [fin, setFin] = useState(false);

  useInterval(() => {
    setMiaou(getMiaou(Miaou, levels));
  }, 1000);

  return (
    <div className="App">
      <div className="App-header">
        <Grid container spacing={8}>
          {/*les miaous */}
          <Grid container item xs={4} spacing={8}>
            <Grid item xs={12}>
              {fin ? "Le chat est tombé amoureux du dev react" : "vous avez"}
            </Grid>
            <Grid item xs={12}>
              {fin ? 0 : Miaou}
            </Grid>
            <Grid item xs={12}>
              {Miaou - 1 && Miaou ? "Miaous" : "Miaou"}
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={() => setMiaou(Miaou + 1)}
                variant="contained"
                color="primary"
              >
                Miaou
              </Button>{" "}
              <img
                alt="miaou"
                src={fin ? cat3 : clicked ? cat2 : cat1}
                onClick={() => {
                  setClick(!clicked);
                  setMiaou(Miaou + 1);
                }}
              />
            </Grid>
          </Grid>
          {/*entete + levels*/}
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
                <Grid container item xs={12} key={levels.id}>
                  <Grid container item xs={12}>
                    <Grid item xs={2}>
                      {levels.cost}
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        key={levels.id}
                        onClick={() => {
                          if (Miaou >= levels.cost && !fin) {
                            levels.nombre = levels.nombre + 1; // + 1 caresseur
                            setMiaou(Miaou - levels.cost);
                            // le carresseur coutera plus cher vive le capitalisme
                            levels.cost = levels.cost + levels.valeur * 5;
                            if (levels.id + 1 > level) setLevel(levels.id + 1);
                            if (levels.id === 10) setFin(true);
                          } //console.log("click");
                        }}
                        variant="contained"
                        color="primary"
                      >
                        {levels.label}
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      {levels.nombre} *
                    </Grid>
                    <Grid item xs={2}>
                      {levels.valeur}
                    </Grid>
                  </Grid>
                </Grid>
              )
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
