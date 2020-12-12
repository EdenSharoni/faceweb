import React, { Component } from "react";
import ModalLogin from "./modalLogin";

class Home extends Component {
  state = {};
  render() {
    const { user } = this.props;
    console.log("Home Page");

    return (
      <div>
        {console.log(user)}
        <h1>You are signed in</h1>
      </div>
    );
  }
}

export default Home;
