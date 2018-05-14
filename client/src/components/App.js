// @flow

import React from "react";
import styles from "./App.pcss";
import Loading from "./Loading";
// import IndexPage from "./IndexPage";
import FeedGrid from "./FeedGrid";
import { Switch, Route } from "react-router";
// import youtube from "../services/feeds/youtube";
import { type FeedObject } from "../utils/types";
import type { Map } from "immutable";

const feedList = [
  {
    type: "youtube",
    param: "InTheLittleWood"
  }
];

type State = {
  error: any
};
type Props = {
  getFeed: FeedObject => Promise<Response>,
  feeds: any, // fix
  loading: number
};

class App extends React.PureComponent<Props, State> {
  componentDidMount() {
    const { getFeed } = this.props;
    feedList.map(feedObject => getFeed(feedObject));
  }

  state = {
    error: undefined
  };

  componentDidCatch(e: any) {
    this.setState({ error: e });
  }

  render() {
    const { loading, feeds } = this.props;
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
              return <FeedGrid feeds={feeds} />;
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
