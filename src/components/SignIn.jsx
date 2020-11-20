import React, { Component } from "react";

class SignIn extends Component {
  render() {
    return <button onClick={this.signInWithGoogle}>Sign in with google</button>;
  }
  signInWithGoogle = () => {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.auth.signInWithPopup(provider);
  };
}

export default SignIn;
<div></div>;
