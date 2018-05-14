/**
 * Main container, contains all blocks
 */
import React from "react";

// const chooseComponent = (feed) =>

const FeedGrid = props => {
  const { feeds } = props;

  return (
    <div>
      I am a FeedGrid
      {feeds.map(feed => "lol")}
    </div>
  );
};

export default FeedGrid;
