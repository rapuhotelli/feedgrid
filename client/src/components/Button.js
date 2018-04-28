import styled from "styled-components";

export default styled.button`
  border: 5px dashed rgb(0, 0, 0);
  padding: 1em;
  border-radius: 5px;
  &:hover {
    background-color: black;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props =>
    props.block &&
    `
    display: block;
    width: 100%;
  `};
`;
