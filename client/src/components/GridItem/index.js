import React from "react";
import style from "./griditem.pcss";
import classNames from "classnames";

const GridItem = () => {
  return (
    <div style={classNames(style.gridItem, style.youtube)}>
      <p>Stuff</p>
    </div>
  );
};

export default GridItem;
