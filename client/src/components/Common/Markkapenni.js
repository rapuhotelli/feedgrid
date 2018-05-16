/*
 Peruskomponenttirakenne!

 Backtickkien (`) sisään normaalia css:ää
 React-komponentit (myös styled-components) alkavat isolla kirjaimella
*/

import React from "react";
import styled from "styled-components";
import * as color from "../Block/colors";

// span-elementti, sininen
const Spanni = styled.span`
  color: blue;
`;

// h3 eli kolmannen tason otsikko
const Tyylittelyt = styled.h3`
  font-size: 32pt;
  color: ${color.white};
  font-family: "IBM Plex Sans", sans-serif;
  line-height: 64pt;
  font-weight: 200;
  background: ${color.twitterBlue};
`;

// h2
const HaistaJukkisGagga = styled.h3`
  font-size: 32pt;
  color: ${color.white};
  font-family: "IBM Plex Sans", sans-serif;
  line-height: 32pt;
  font-weight: 200;
  background: ${color.twitterBlueLight};
`;

// Lopullinen ulostettava komponentti. Sisältää sisäkkäin yllä määritellyn suurifonttisen otsikon,
// jonka sisällä (aika turhan) sinistä tekstiä sisältävän span-elementin
const Markkapenni = () => (
  <div>
    <Tyylittelyt>Olen otsikko</Tyylittelyt>
    <HaistaJukkisGagga>Yksi markka mutta mikä penni</HaistaJukkisGagga>
  </div>
);

// Paljasta sovellukselle
export default Markkapenni;
