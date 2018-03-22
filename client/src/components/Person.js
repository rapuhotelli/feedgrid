import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import PropTypes from "prop-types";
import Button from "./Button";
import Icon from "react-fa";
import { pure } from "recompose";

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.root, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });
  return (
    <div className={classes}>
      {person.lastName}, {person.firstName} ({person.age} vuotta)
      <div>
        <Button
          block
          onClick={() => {
            firePerson(person.id);
          }}
        >
          <Icon name="heart" size="2x" />
          Vapauta
        </Button>
      </div>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired,
  firePerson: PropTypes.func.isRequired
};

export default pure(Person);
