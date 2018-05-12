import { List, Map } from "immutable";

import youtubeService from "../services/feeds/youtube";
// import personService from '../services/person'

const defaultState = Map({
  feeds: List()
});

// tee: päätä datarakenne feedeille

export const youtubeChannel = channel => {
  return dispatch => {
    dispatch({
      type: "GET_YOUTUBE_PENDING"
    });
    youtubeService
      .getYoutubeChannel(channel)
      .then(data => {
        dispatch({ type: "GET_YOUTUBE_FULFILLED", payload: data }); // List(data)
      })
      .catch(e => {
        dispatch({
          type: "GET_YOUTUBE_REJECTED",
          error: true,
          payload: e
        });
      });
  };
};

export default function feedReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    /*
    case "GET_YOUTUBE_FULFILLED":
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
    case "GET_YOUTUBE_FULFILLED":
      return state.set("feeds", List(payload));

    default:
      return state;
  }
}
