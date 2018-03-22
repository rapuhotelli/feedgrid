import React from "react";
import personService from "../services/person";
import PersonList from "./PersonList";
import styles from "./App.pcss";
import { List } from "immutable";
import AddPersonForm from "./AddPersonForm";
/* // lol
{new Array(200).fill("x").map(() => {
  return <Person  person={personService.createPerson()} />;
})}
*/

const persons = Array.from(Array(30), personService.createPerson);

class App extends React.PureComponent {
  state = {
    persons: List()
  };

  componentDidMount() {
    personService.getPersons().then(persons => {
      this.setState(() => {
        return {
          persons: List(persons)
        };
      });
    });
  }

  firePerson = id => {
    this.setState(state => {
      return {
        persons: state.persons.filter(p => p.id !== id)
      };
    });
  };

  hirePerson = person => {
    this.setState(state => {
      return {
        persons: this.state.persons.push(person)
      };
    });
  };

  render() {
    const { persons } = this.state;

    const goodPeople = persons.filter(p => p.gender === "m" && p.age <= 30);
    const badPeople = persons.filter(p => p.gender === "f" || p.age > 30);

    return (
      <div>
        <h1>
          <img src={require("../assets/trollo.png")} alt="Trol" />
          Tussinaama
        </h1>

        <AddPersonForm hirePerson={this.hirePerson} />

        <hr />

        <PersonList
          title="Hyvät henkilöt"
          people={goodPeople}
          firePerson={this.firePerson}
        />

        <PersonList
          title="Pahat henkilöt"
          showMeta
          people={badPeople}
          firePerson={this.firePerson}
        />
      </div>
    );
  }
}

export default App;
