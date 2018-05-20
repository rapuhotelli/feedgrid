import React from "react";
import posed from "react-pose";

const Pose = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  initialPose: "hidden"
});

const withPose = WrappedComponent => {
  return class WithPose extends React.Component {
    state = {
      isVisible: false
    };

    componentDidMount() {
      this.setState({ isVisible: true });
    }

    render() {
      const { hostRef, ...ownProps } = this.props;
      return (
        <Pose ref={hostRef} pose={this.state.isVisible ? "visible" : "hidden"}>
          <WrappedComponent {...ownProps} />
        </Pose>
      );
    }
  };
};

export default withPose;
