import { List, Map, Set } from "immutable";

import { feedRequest } from "../services/feeds";

const defaultState = Map({
  content: List(),
  feedTypes: Set()
});

export const getFeed = feedObject => {
  return {
    type: "GET_FEED",
    payload: {
      promise: feedRequest(feedObject)
    }
  };
};

const getAllTypes = feeds => Set(feeds.map(feed => feed.get("type"))).toArray();

export default function feedReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    /*
    case "GET_YOUTUBE_INSERT??":
      return state.update("feeds", feed => feed.push(payload));

    case "GET_YOUTUBE_PENDING":
      return state.updateIn(
        ["feeds", state.get("feeds").findIndex(p => p.id === payload)],
        p => {
          return {
            ...p,
            firing: true
          };
        }
      );
    */
    case "GET_FEED_FULFILLED":
      state = state.set(
        "feedTypes",
        state.get("feedTypes").union(getAllTypes(payload))
      );
      return state.set("content", state.get("content").concat(List(payload)));

    default:
      return state;
  }
}
