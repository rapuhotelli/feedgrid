/*
A single twitter tweet
*/

import React from "react";
import classes from "./tweet.pcss";
import defaultPic from "../../../assets/Oval.png";

const TweetItem = props => {
  const { name, username, tweet, profilePic = defaultPic } = props;

  return (
    <div className={classes.background}>
      <img src={profilePic} alt="" />
      <div className={classes.name}>{name}</div>
      <div className={classes.username}>{username}</div>
      <div className={classes.tweet}>{tweet}</div>
    </div>
  );
};

// Paljasta sovellukselle
export default TweetItem;
