import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Button from "../src/components/Button";
import YoutubeItem from "../src/components/Items/Youtube";
import TestHeader from "../src/components/Common/TestHeader";
import Markkapenni from "../src/components/Common/Markkapenni";
import Tweet from "../src/components/Items/Tweet";
import Item from "../src/components/Items";

storiesOf("Items/Item", module).add("normal", () => (
  <Item
    type="tweet"
    name="Gaylord"
    username="@drkobros 28 Jan 2016"
    tweet="Yeah, I know I should have joined Twitter ages ago. But you know,
    traveling around the world doing my business keeps me really busy...
    #salmoncheek"
    pose="hidden"
  />
));

storiesOf("Items/Youtube", module).add("normal", () => (
  <YoutubeItem
    title="Lusso Grande"
    thumbnail="http://place.manatee.lc/120/90.jpg"
  />
));

storiesOf("Items/Tweet", module).add("Gaylord", () => (
  <Tweet
    name="Gaylord"
    username="@drkobros 28 Jan 2016"
    tweet="Yeah, I know I should have joined Twitter ages ago. But you know,
        traveling around the world doing my business keeps me really busy...
        #salmoncheek"
  />
));

storiesOf("Common/Markkapenni", module).add("normal", () => <Markkapenni />);

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Welcome/Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
