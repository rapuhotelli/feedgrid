import React from "react";
import styled from "styled-components";

const YoutubeItemStyles = styled.div`
  background-color: red;
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
