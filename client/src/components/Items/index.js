import React, { Fragment } from "react";
// import classNames from "classnames";
// import withPose from "../withPose";

// import HN from "./HN";
// import Tweet from "./Tweet";
import Youtube from "./Youtube";

const chooseComponent = item => {
  switch (item.type) {
    case "youtube":
      console.log("chosen youtube");
      return <Youtube {...item} />;
    /*
    case "tweet":
      return <Tweet item={item} />;
    case "HN":
      return <HN item={item} />;
      */
    default:
      console.log("defaults null");
      return null;
  }
};

const Item = props => chooseComponent(props.item);

// const ItemWithPose = withPose(Item);
export default Item;
//export default withPose(Item);
