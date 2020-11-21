//firebase sdk
import firebase from "firebase/app"; //import firebase sdk
import "firebase/firestore"; //import firestore for our database
import "firebase/auth"; //import auth for our user authentication

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
//const firestore = firebase.firestore();
class Firebase {
  getAuth = () => {
    return auth;
  };
  getFirebase = () => {
    return firebase;
  };
}
export default new Firebase();
