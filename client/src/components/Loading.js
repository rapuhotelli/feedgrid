import React from "react";
import Icon from "react-fa";
import styled from "styled-components";

const Spinner = styled.div`
  position: fixed;
  top: 1em;
  right: 1em;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
`;

const Loading = () => {
  return (
    <Spinner>
      <Icon name="spinner" spin />
    </Spinner>
  );
};

export default Loading;
