/**
 * Main container, contains all blocks
 */
import React from "react";
// import YoutubeItem from "../Items/Youtube";
import Block from "../Block";
import { Set, Map } from "immutable";

const FeedGrid = props => {
  const { feeds, feedTypes } = props;

  // todo: do not use immutable in dumb components
  if (!feeds) return null;
  let sorted = Map();
  feedTypes.forEach(feedType => {
    sorted = sorted.set(
      feedType,
      feeds.filter(item => item.get("type") === feedType)
    );
  });
  return (
    <div>
      {feedTypes.map(feedType => (
        <Block key={feedType} type={feedType} items={sorted.get(feedType)} />
      ))}
    </div>
  );
};

export default FeedGrid;
