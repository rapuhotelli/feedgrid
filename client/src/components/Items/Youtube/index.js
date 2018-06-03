import React from "react";

import classes from "./youtube.pcss";
import Image from "../../elements/Image";

const YoutubeItem = ({ title, thumbnail, author, date }) => {
  return (
    <div className={classes.youtubeItem}>
      <div className={classes.youtubeDetails}>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      <Image data={thumbnail} />
    </div>
  );
};
export default YoutubeItem;
