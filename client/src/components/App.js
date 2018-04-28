import React from "react";
import styles from "./App.pcss";
import Loading from "./Loading";
import IndexPage from "./IndexPage";
import PersonPage from "./PersonPage";
import { Switch, Route } from "react-router";

import FancyTest from "./FancyTest";

class App extends React.PureComponent {
  render() {
    const { loading } = this.props;
    /*
    const { error } = this.state;

    if (error) {
      return <div>{error.message}</div>;
    }
    */

    return (
      <div>
        {loading > 0 && <Loading />}

        <h1>
          <img src={require("../assets/trollo.png")} alt="Trol" />
          <FancyTest
            tyyppi="youtube"
            viesti="juuh elikkäalskjdhaksjh"
            kikki="tussi"
          />
        </h1>
      </div>
    );
  }
}

export default App;
