import React from "react";
import PersonList from "./PersonList";
import styles from "./IndexPage.pcss";
import AddPersonForm from "./AddPersonForm";

const IndexPage = ({ persons, hirePerson, firePerson }) => {
  const goodPeople = persons.filter(p => p.gender === "m" && p.age <= 30);
  const badPeople = persons.filter(p => p.gender === "f" || p.age > 30);
  return (
    <div className={styles.grid}>
      <AddPersonForm hirePerson={hirePerson} />

      <PersonList
        title="Hyvät henkilöt"
        people={goodPeople}
        firePerson={firePerson}
      />

      <PersonList
        title="Pahat henkilöt"
        showMeta
        people={badPeople}
        firePerson={firePerson}
      />
    </div>
  );
};

export default IndexPage;
