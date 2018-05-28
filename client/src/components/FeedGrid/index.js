import { connect } from "react-redux";
import FeedGrid from "./component";

export default connect(function mapStateToProps(state) {
  return {
    feedTypes: state.feeds.get("feedTypes")
  };
})(FeedGrid);
