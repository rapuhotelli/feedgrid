import { List, Map } from "immutable";

import youtubeService from "../services/feeds/youtube";
// import personService from '../services/person'

const defaultState = Map({
  persons: List()
});

tee: päätä datarakenne feedeille

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

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_YOUTUBE_FULFILLED":
      return state.update("persons", persons => persons.push(payload));

    case "FIRE_PERSON_FULFILLED":
      return state.update("persons", persons =>
        persons.filter(p => p.id !== payload)
      );

    case "GET_YOUTUBE_PENDING":
      return state.updateIn(
        ["persons", state.get("persons").findIndex(p => p.id === payload)],
        p => {
          return {
            ...p,
            firing: true
          };
        }
      );

    case "GET_PERSONS_FULFILLED":
      return state.set("persons", List(payload));

    default:
      return state;
  }
}
