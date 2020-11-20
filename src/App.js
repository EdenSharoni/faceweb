import React from "react";
import profileImage from "./img/picture.png";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";

//firebase sdk
import firebase from "firebase/app"; //import firebase sdk
import "firebase/firestore"; //import firestore for our database
import "firebase/auth"; //import auth for our user authentication

//hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

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

  return (
    <div className="App">
      <h1>My React Page</h1>
      <h2>Author: Eden Sharoni - 19/11/2020</h2>
      <img src={profileImage} alt="Profile-image" />
      <section>
        {user ? (
          <Home auth={auth} />
        ) : (
          <SignIn firebase={firebase} auth={auth} />
        )}
      </section>
    </div>
  );
}

export default App;
