import React from "react";

// import * as colors from "../Block/colors"
// import classes from "../../Common/common.pcss";
import classes from "./youtube.pcss";

const YoutubeItem = ({ title, thumbnail }) => (
  <div className={classes.youtubeItemB}>
    <h3>{title}</h3>
    <img src={thumbnail} alt="" />
  </div>
);

export default YoutubeItem;
