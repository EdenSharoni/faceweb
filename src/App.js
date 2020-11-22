import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar";

//firebase sdk
import firebase from "firebase/app"; //import firebase sdk
import "firebase/firestore"; //import firestore for our database
import "firebase/auth"; //import auth for our user authentication

//hooks
import { useAuthState } from "react-firebase-hooks/auth";
//import { useCollectionData } from "react-firebase-hooks/firestore";

//initialize our app
if (!firebase.apps.length)
  firebase.initializeApp({
    apiKey: "AIzaSyBEiqcX4M_uaqYmgyiKeXdf9s9CFUjImx8",
    authDomain: "faceweb-2ca13.firebaseapp.com",
    databaseURL: "https://faceweb-2ca13.firebaseio.com",
    projectId: "faceweb-2ca13",
    storageBucket: "faceweb-2ca13.appspot.com",
    messagingSenderId: "552369507263",
    appId: "1:552369507263:web:62367dc843d4f59bf96f0a",
    measurementId: "G-5FZB4B6TH0",
  });

//reference to our auth and sdk as global variables
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  if (user) {
    GetUserFromFirestore();
  }
  return (
    <Router>
      <NavBar user={user} auth={auth} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <SignIn firebase={firebase} auth={auth} />}
        />
        <Route
          exact
          path="/home"
          render={(props) =>
            user ? <Home user={user} /> : <Redirect push to="./" />
          }
        />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}

const GetUserFromFirestore = (e) => {
  console.log("GetUserFromFirestore");
  const { email, displayName, uid, photoURL } = auth.currentUser;
  const usesrRef = firestore.collection("Users").doc(uid);
  usesrRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      console.log("User Exists");
      usesrRef.onSnapshot((doc) => {
        // do stuff with the data
      });
    } else {
      console.log("User does not exists");
      UpdateUserInFirestore(uid, displayName, email, photoURL);
    }
  });
};

const UpdateUserInFirestore = async (uid, displayName, email, photoURL) => {
  console.log("UpdateUserInFirestore");
  firestore.collection("Users").doc(uid).set({
    uid,
    displayName,
    email,
    photoURL,
  });
};

export default App;
