import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    const { user, auth } = this.props;
    return (
      <div className="NavBar_layout">
        <button className="button">
          <span>About Author</span>
        </button>
        <hr />
        {user ? (
          <div id="user">
            <img src={user.photoURL} alt="not found" />
            <p>{"Welcome: " + user.displayName}</p>
            {user && (
              <button className="button" onClick={() => auth.signOut()}>
                <span> Sign Out</span>
              </button>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default NavBar;
