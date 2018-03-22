import React from "react";
import personService from "../services/person";

class AddPersonForm extends React.PureComponent {
  state = {
    firstName: "Adam",
    lastName: "Adamsson"
  };

  handleSubmit = e => {
    e.preventDefault();
    const { hirePerson } = this.props;

    hirePerson({
      ...personService.createPerson(),
      ...this.state
    });
    return false;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            onChange={e => {
              this.setState({
                firstName: e.target.value
              });
            }}
            placeholder="etu"
            type="text"
            value={this.state.firstName}
          />
          <input
            onChange={e => {
              this.setState({
                lastName: e.target.value
              });
            }}
            placeholder="suku"
            type="text"
            value={this.state.lastName}
          />
          <button type="submit">Palkkaa</button>
        </div>
      </form>
    );
  }
}

export default AddPersonForm;
