/*
Peruskomponenttirakenne!

Käytetään PostCSS:ää, joka on normaalia css:ää joillakin lisätoiminnoilla

importti pcss tiedostosta antaa meille muuttujan jossa on css classit

*/

import React from "react";
import classes from "./Markkapenni.pcss";

const Markkapenni = () => (
  <div className={classes.markkapenni}>
    <div className={classes.tyylittelyt}>Olen otsikko</div>
    <div className={classes.haistaJuggisGagga}>
      Yksi markka mutta mikä penni
    </div>
  </div>
);

// Paljasta sovellukselle
export default Markkapenni;
