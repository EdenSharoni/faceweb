import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      this.props.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      this.props.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      this.props.firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  render() {
    console.log("SignIn Page");
    if (this.props.auth.currentUser)
      return <Redirect push to="/faceweb/home" />;
    return (
      <div className="SignIn_layout">
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={this.props.auth}
        />
      </div>
    );
  }
}

export default SignIn;
