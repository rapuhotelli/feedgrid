import React from "react";

import HN from "../Items/HN";
import Tweet from "../Items/Tweet";
import Youtube from "../Items/Youtube";
/**
 * Takes in a block type
 * @param {*} props
 */
const sampleParam = {
  type: "youtube",
  items: []
};

const blocks = {
  youtube: {
    itemComponent: Youtube,
    title: "Youtube"
  },
  twitter: {
    itemComponent: Tweet,
    title: "Tweet"
  },
  HN: {
    itemComponent: HN,
    title: "Hacker News"
  }
};

const chooseComponent = type => {
  switch (type) {
    case "youtube":
      return Youtube;
    case "tweet":
      return Tweet;
    case "HN":
      return HN;
    default:
      return null;
  }
};

const Block = ({ type, items }) => {
  const details = blocks[type];
  const DynamicItem = details.itemComponent;
  const title = details.title;
  return (
    <div>
      <h2>{title}</h2>
      {items.map(item => {
        return <DynamicItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Block;
