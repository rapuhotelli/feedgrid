import React from "react";
import style from "./griditem.pcss";
import classNames from "classnames";

import HN from "./HN";
import Tweet from "./Tweet";
import Youtube from "./Youtube";

const chooseComponent = (props) => {
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

const GenericItem = props => {
  return (
    <div className={classNames(style.gridItem, style.youtube)}>
      {chooseComponent(props)}
    </div>
  );
};

export default GenericItem;
