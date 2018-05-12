import React from "react";
import styles from "./App.pcss";
import Loading from "./Loading";
// import IndexPage from "./IndexPage";
import FeedGrid from "./FeedGrid";
import { Switch, Route } from "react-router";
// import youtube from "../services/feeds/youtube";

const feeds = [
  {
    type: "youtube",
    id: "InTheLittleWood"
  }
];

class App extends React.PureComponent {
  componentDidMount() {
    /*
    if (this.props.persons.count() > 0) {
      return;
    }
    */
    // this.props.getPersons();
    // this.myTestChannels.map getYoutubeChannel("InTheLittleWood");
    // youtube.getYoutubeChannel("InTheLittleWood");
    // this.props.youtubeChannel("InTheLittleWood");
    // getFeed("youtube", "InTheLittleWood");
    // this.props.getFeeds
    // feeds.map(feedObject => this.props.getFeed(feedObject));
    this.props.getFeed({
      type: "youtube",
      id: "InTheLittleWood",
      param: "InTheLittleWood"
    });
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
