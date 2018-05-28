import React from "react";

// import * as colors from "../Block/colors"
// import classes from "../../Common/common.pcss";
import classes from "./youtube.pcss";

const YoutubeItem = ({ item }) => {
  return (
    <div className={classes.youtubeItem}>
      <h3>{item.title}</h3>
      <img src={item.thumbnail.url} alt="" />
    </div>
  );
};
//
export default YoutubeItem;
