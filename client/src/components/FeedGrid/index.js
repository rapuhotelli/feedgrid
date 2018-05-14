/**
 * Main container, contains all blocks
 */
import React from "react";
import YoutubeItem from "../Items/Youtube";

const FeedGrid = props => {
  const { feeds } = props;
  const testItem = feeds.get(0);
  if (!testItem) {
    return null;
  }
  return (
    <div>
      I am a FeedGrid
      <YoutubeItem
        title={testItem.snippet.title}
        thumbnail={testItem.snippet.thumbnails.default.url}
      />
    </div>
  );
};

export default FeedGrid;
