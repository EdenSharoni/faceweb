import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    const { user, auth } = this.props;
    console.log("Home Page");

    return (
      <div>
        {console.log(user)}
        <h1>You are signed in</h1>
        {user && (
          <button className="button" onClick={() => auth.signOut()}>
            <span> Sign Out</span>
          </button>
        )}
      </div>
    );
  }
}

export default Home;
