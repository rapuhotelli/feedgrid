// @flow
import getYoutube from "./youtube";
import { type FeedObject } from "../../utils/types";

export function feedRequest(feed: FeedObject) {
  switch (feed.type) {
    case "youtube":
      return getYoutube(feed.param);
    default:
      throw new Error("Bad feed type");
  }
}
