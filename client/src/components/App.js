import React from "react";
import styles from "./App.pcss";
import Loading from "./Loading";
// import IndexPage from "./IndexPage";
import FeedGrid from "./FeedGrid";
// import { getYoutubeChannel } from "../services/feeds";
import { Switch, Route } from "react-router";

// const myTestChannels = ["InTheLittleWood"];

class App extends React.PureComponent {
  componentDidMount() {
    /*
    if (this.props.persons.count() > 0) {
      return;
    }
    */
    // this.props.getPersons();
    // this.myTestChannels.map getYoutubeChannel("InTheLittleWood");
  }

  state = {
    error: undefined
  };

  componentDidCatch(e) {
    this.setState({ error: e });
  }

  render() {
    const { loading } = this.props;
    const { error } = this.state;

    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <div>
        {loading > 0 && <Loading />}

        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return <FeedGrid feeds={[]} />;
            }}
          />
          <Route
            path="/collection/:id"
            exact
            render={props => {
              // const { id } = props.match.params;
              // const person = persons.find(p => p.id === id);
              return <FeedGrid feeds={[]} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
