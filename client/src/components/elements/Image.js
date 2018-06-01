// @flow

import React from "react";
// import { connect } from "react-redux";
// import { loadState } from "../../ducks/elements";
import styles from "./styles.pcss";

/*
type DispatchProps = {
  loadState: string => void
};
*/
type OwnProps = {
  alt: ?string,
  data: Object
};
type State = {
  loading: boolean
};
type Props = OwnProps;

class Image extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // this.props.loadState("PENDING");
    console.log(this.props.data);
    this.state = {
      loading: true
    };
  }

  loadSuccess() {
    // this.props.loadState("FULFILLED");
    this.setState({
      loading: false
    });
  }

  loadFailed() {
    // this.props.loadState("REJECTED");
    this.setState({
      loading: false
    });
  }

  render() {
    return (
      <div
        style={{
          height: this.props.data.height,
          width: this.props.data.width
        }}
        className={styles.imageContainer}
      >
        <img
          alt={this.props.alt || ""}
          src={this.props.data.url}
          onLoad={this.loadSuccess.bind(this)}
          onError={this.loadFailed.bind(this)}
        />
      </div>
    );
  }
}

export default Image;
/*

 */

/*
export default connect(null, {
  loadState
})(Image);
*/
