import React from "react";
import FancyListaNappi from "./FancyListaNappi";

const FancyTest = props => {
  let tyylit = {
    vakio: {
      color: "blue",
      backgroundColor: "yellow"
    },
    fancy: {
      color: "pink",
      backgroundColor: "red"
    }
  };

  let tyyliRiippuenPropsista = tyylit.vakio;
  if (props.tyyppi === "youtube") {
    tyyliRiippuenPropsista = tyylit.fancy;
  }

  return (
    <div style={tyyliRiippuenPropsista}>
      <p>{props.viesti}</p>
      <ul>
        <FancyListaNappi>1</FancyListaNappi>
        <FancyListaNappi>5</FancyListaNappi>
        <FancyListaNappi>6</FancyListaNappi>
      </ul>
    </div>
  );
};

export default FancyTest;
