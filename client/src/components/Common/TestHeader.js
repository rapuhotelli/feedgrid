/*
 Peruskomponenttirakenne!

 Backtickkien (`) sisään normaalia css:ää
 React-komponentit (myös styled-components) alkavat isolla kirjaimella
*/

import React from "react";
import styled from "styled-components";

// span-elementti, sininen
const Spanni = styled.span`
  color: blue;
`;

// h3 eli kolmannen tason otsikko
const Tyylittelyt = styled.h3`
  font-size: 50pt;
`;

// Lopullinen ulostettava komponentti. Sisältää sisäkkäin yllä määritellyn suurifonttisen otsikon,
// jonka sisällä (aika turhan) sinistä tekstiä sisältävän span-elementin
const TestHeader = () => (
  <Tyylittelyt>
    <Spanni>Olen otsikko</Spanni>
  </Tyylittelyt>
);

// Paljasta sovellukselle
export default TestHeader;
