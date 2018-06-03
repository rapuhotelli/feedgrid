import React from "react";

import HN from "../Items/HN";
import Tweet from "../Items/Tweet";
import Youtube from "../Items/Youtube";
import styles from "./styles.pcss";
import Item from "../Items";
import classNames from "classnames";

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


const Block = ({ type, items }) => {
  const details = blocks[type];
  // const DynamicItem = details.itemComponent;
  const title = details.title;
  return (
    <div className={classNames(styles.block, styles[type])}>
      <h2>{title}</h2>
      {items.map(item => <Item key={item.id} item={item} />)}
    </div>
  );
};

export default Block;
