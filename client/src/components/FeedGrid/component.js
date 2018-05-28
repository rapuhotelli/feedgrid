/**
 * Main container, contains all blocks
 */
import React from "react";
import Block from "../Block";
import styles from "./styles.pcss";

const FeedGrid = props => {
  const { feeds, feedTypes } = props;

  if (!feeds) return null;

  return (
    <div className={styles.feedGrid}>
      <h1>Welcome to FeedGrid</h1>
      {feedTypes.map(feedType => (
        <Block
          key={feedType}
          type={feedType}
          items={feeds.filter(item => item.type === feedType)}
        />
      ))}
    </div>
  );
};

/*

 */
export default FeedGrid;
