import { List, Map } from "immutable";

// import { feedRequest } from "../services/feeds";
import { get as getYoutube } from "../services/feeds/youtube";
import personService from "../services/person";
// import personService from '../services/person'

const defaultState = Map({
  content: List()
});

export const getFeed = ({ type, param }) => {
  return {
    type: "GET_FEED",
    payload: {
      promise: getYoutube(param),
      data: param
    }
  };
  /*
  console.log(type, param);
  return dispatch => {
    dispatch({
      type: "GET_FEED_PENDING"
    });

    try {
      console.log("trying");
      const result = getYoutube(param);
      console.log("result is", result);
      dispatch({ type: "GET_FEED", payload: result }); // List(data)
    } catch (e) {
      dispatch({
        type: "GET_FEED_REJECTED",
        error: true,
        payload: e
      });
    }

    /*
      .then(data => {
        dispatch({ type: "GET_FEED_FULFILLED", payload: data }); // List(data)
      })
      .catch(e => {
        dispatch({
          type: "GET_FEED_REJECTED",
          error: true,
          payload: e
        });
      });
  };
      */
};

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
      return state.set("content", List(payload));

    default:
      return state;
  }
}
