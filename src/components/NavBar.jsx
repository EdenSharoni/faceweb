import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    const { auth } = this.props;
    return (
      <div className="NavBar_layout">
        <button class="button">
          <span>About Author</span>
        </button>
        <div className="vertical_line"></div>
        {console.log(auth.currentUser)}
        {auth.currentUser ? (
          <div id="user">
            <img src={auth.currentUser.photoURL} alt="not found" />
            <p>{"Welcome: " + auth.currentUser.displayName}</p>
            {auth.currentUser && (
              <button class="button" onClick={() => auth.signOut()}>
                <span> Sign Out</span>
              </button>
            )}
          </div>
        ) : (
          <div></div>
        )}

        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/games">Games</Link>
      </div>
    );
  }
}

export default NavBar;
