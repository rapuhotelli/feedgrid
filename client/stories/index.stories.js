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

storiesOf("Common/TestHeader", module).add("normal", () => (
  <TestHeader/>
))
storiesOf("Items/Youtube", module).add("normal", () => (
  <YoutubeItem
    title="Lusso Grande"
    thumbnail="http://place.manatee.lc/120/90.jpg"
  />
))
storiesOf("Common/Markkapenni", module).add("normal", () => (
  <Markkapenni/>
))
  ;
storiesOf("Items/Tweet", module).add("normal", () => (
  <Tweet/>
))
  ;

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
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

