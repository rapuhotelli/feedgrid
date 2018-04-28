import React from "react";


class FancyListaNappi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
      clicking: false
    };
  }

  napinPainallus() {
    alert("nyt alkaa lataus");
  }

  render() {
    console.log(this.props);
    return <li onClick={this.napinPainallus}>Hitler</li>;
  }
}

export default FancyListaNappi;
