import React from "react";

const YoutubeItem = ({ title, thumbnail }) => (
  <div>
    <h3>{title}</h3>
    <img src={thumbnail} />
  </div>
);

export default YoutubeItem;
