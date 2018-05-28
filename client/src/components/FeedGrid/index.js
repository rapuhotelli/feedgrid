import { connect } from "react-redux";
import toJS from "../../utils/components/toJS";

import FeedGrid from "./component";

export default connect(state => ({ feedTypes: state.feeds.get("feedTypes") }))(
  toJS(FeedGrid)
);
