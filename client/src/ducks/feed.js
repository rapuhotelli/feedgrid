import { List, Map } from "immutable";

import youtubeService from "../services/feeds/youtube";
// import personService from '../services/person'

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
