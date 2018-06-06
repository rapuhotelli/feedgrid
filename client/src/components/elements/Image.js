// @flow

import React from "react";
// import { connect } from "react-redux";
// import { loadState } from "../../ducks/elements";
import styles from "./styles.pcss";
import classNames from "classnames";

/*
type DispatchProps = {
  loadState: string => void
};
*/
type OwnProps = {
  alt: ?string,
  data: Object,
  className: ?string
};
type State = {
  loading: boolean
};
type Props = OwnProps;

/**
 * Loading state unused as of now
 */
class Image extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  loadSuccess() {
    this.setState({
      loading: false
    });
  }

  loadFailed() {
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
        className={classNames(styles.imageContainer, this.props.className)}
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
