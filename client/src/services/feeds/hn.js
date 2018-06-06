// @flow

import axios from "axios/index";
import { List, Map } from "immutable";
import Parser from "rss-parser";

let parser = new Parser();

/**
 * Todo make this server side
 * @returns {Promise<void>}
 */
const getHN = async () => {
  let feed = await parser.parseURL("http://news.ycombinator.com/rss");
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ":" + item.link);
  });
};

export default getHN;
