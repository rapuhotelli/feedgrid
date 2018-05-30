import React from "react";

import classes from "./youtube.pcss";
import Image from "../../elements/Image";

const YoutubeItem = ({ item }) => {
  return (
    <div className={classes.youtubeItem}>
      <h3>{item.title}</h3>
      <Image data={item.thumbnail} />
    </div>
  );
};
export default YoutubeItem;
