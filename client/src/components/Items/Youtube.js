import React from "react";
import styled from "styled-components";
import * as colors from "../Block/colors"

const YoutubeItemStyles = styled.div`
  background-color: ${colors.youtubeRed};
  color: white;
  font-family: "IBM Plex Sans", sans-serif;
`;

const YoutubeItem = ({ title, thumbnail }) => (
  <YoutubeItemStyles>
    <h3>{title}</h3>
    <img src={thumbnail} />
  </YoutubeItemStyles>
);

export default YoutubeItem;
