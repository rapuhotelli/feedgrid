import { connect } from "react-redux";
import App from "../App";
// import { getPersons, hirePerson, firePerson } from "../../ducks/person";
import { getFeed } from "../../ducks/feeds";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    function mapStateToProps(state) {
      // persons: state.person.get("persons"),
      return {
        feeds: state.feeds.get("feeds"),
        loading: state.ui.get("loading")
      };
    },
    {
      getFeed
    }
  )(App)
);
