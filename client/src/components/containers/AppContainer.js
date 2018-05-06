import { connect } from "react-redux";
import App from "../App";
// import { getPersons, hirePerson, firePerson } from "../../ducks/person";
import { youtubeChannel } from "../../ducks/feed";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    state => ({
      // persons: state.person.get("persons"),
      feeds: state.feeds.get("feeds"),
      loading: state.ui.get("loading")
    }),
    {
      youtubeChannel
    }
  )(App)
);
