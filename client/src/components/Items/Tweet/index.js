/*
A single twitter tweet
*/

import React from "react";
import classes from "./tweet.pcss";

const TweetItem = () => (
  <div className={classes.background}>
    <div className={classes.name}>Gaylord</div>
    <div className={classes.username}>@drkobros 28 Jan 2016</div>
    <div className={classes.asd}>
      Yeah, I know I should have joined Twitter ages ago. But you know,
      traveling around the world doing my business keeps me really busy...
      #salmoncheek
    </div>
  </div>
);

// Paljasta sovellukselle
export default TweetItem;
