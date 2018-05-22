import React from "react";

import HN from "./HN";
import Tweet from "./Tweet";
import Youtube from "./Youtube";
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

const Block = props => {
  const { ListItem, title } = blocks[props.type];
  return (
    <div>
      <h2>{title}</h2>
      {props.items.map(item => console.log)}
    </div>
  );
};
