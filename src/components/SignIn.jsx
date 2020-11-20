import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class SignIn extends Component {
  state = { isSignedIn: false };

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
