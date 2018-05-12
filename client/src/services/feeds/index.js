// @flow
import youtube from "./youtube";
import FeedRequest from "../../utils/types";

export function feedRequest(feed: FeedRequest) {
  switch (feed.type) {
    case "youtube":
      return youtube;
    default:
      throw new Error("Bad feed type");
  }
}
