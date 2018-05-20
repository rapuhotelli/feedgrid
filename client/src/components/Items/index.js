import React from "react";
import style from "./griditem.pcss";
import classNames from "classnames";
import posed from "react-pose";

import HN from "./HN";
import Tweet from "./Tweet";
import Youtube from "./Youtube";

const chooseComponent = props => {
  const { type, ...rest } = props;
  switch (type) {
    case "youtube":
      return <Youtube {...rest} />;
    case "tweet":
      return <Tweet {...rest} />;
    case "HN":
      return <HN {...rest} />;
    default:
      return null;
  }
};

const Pose = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  initialPose: "hidden"
});

class Item extends React.Component {
  state = {
    isVisible: false
  };

  componentDidMount() {
    this.setState({ isVisible: true });
  }

  render() {
    return (
      <Pose
        ref={this.props.hostRef}
        className={classNames(style.gridItem, style.youtube)}
        pose={this.state.isVisible ? "visible" : "hidden"}
      >
        {chooseComponent(this.props)}
      </Pose>
    );
  }
}

export default Item;

/*
const PosedComponent = posed(Item)({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  initialPose: "hidden"
});

export default PosedComponent;
//export default Item;
*/
