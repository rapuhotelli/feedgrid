// @flow

import React from "react";
import { connect } from "react-redux";
import { loadState } from "../../ducks/elements";

type DispatchProps = {
  loadState: string => void
};
type OwnProps = {
  alt: ?string,
  data: Object
};
type Props = DispatchProps & OwnProps;

class Image extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.props.loadState("PENDING");
    console.log(this.props.data);
    älä tee näin vain lataa sisäisesti
  }

  loadSuccess() {
    this.props.loadState("FULFILLED");
  }

  loadFailed() {
    this.props.loadState("REJECTED");
  }

  render() {
    return (
      <img
        alt={this.props.alt || ""}
        src={this.props.data.url}
        onLoad={this.loadSuccess.bind(this)}
        onError={this.loadFailed.bind(this)}
      />
    );
  }
}

export default connect(null, {
  loadState
})(Image);
