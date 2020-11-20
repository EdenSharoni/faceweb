import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    const { auth } = this.props;
    return (
      <div>
        <h1>You are signed in</h1>
      </div>
    );
  }
}

export default Home;
