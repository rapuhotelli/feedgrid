import React from "react";
import Person from "./Person";
import style from "./PersonList.pcss";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";

const PersonList = props => {
  const { people, showMeta, ...rest } = props;

  const averageAge = people.reduce((a, p) => a + p.age, 0) / people.count();

  return (
    <div>
      <h2>{props.title}</h2>
      {showMeta && <h3>Henkilöitä listalla: {people.count()} </h3>}
      <h3>Keski-ikä: {averageAge.toFixed(2)}</h3>
      {people
        .sortBy(p => p.firstName)
        .sortBy(p => p.lastName)
        .map(p => <Person {...rest} key={p.id} person={p} />)}
    </div>
  );
};

PersonList.propTypes = {
  people: ImmutablePropTypes.list.isRequired,
  title: PropTypes.string.isRequired,
  showMeta: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMeta: false
};

export default PersonList;
