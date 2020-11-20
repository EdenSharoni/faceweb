import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    const { auth } = this.props;
    return (
      <div>
        <h1>You are signed in</h1>
        <h2>Hello: {auth.currentUser.displayName}</h2>
        {console.log(auth.currentUser.displayName)}
        {auth.currentUser && (
          <section>
            <button onClick={() => auth.signOut()}>Sign Out</button>
          </section>
        )}
      </div>
    );
  }
}

export default Home;
