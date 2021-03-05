import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDfBTXhG6Ns_MYtkcpERRiDhJxn4HxQ1xg",
  authDomain: "stalkensteins.firebaseapp.com",
  projectId: "stalkensteins",
  storageBucket: "stalkensteins.appspot.com",
  messagingSenderId: "644968055083",
  appId: "1:644968055083:web:cff0b0b8ea1574e1d5056e",
  measurementId: "G-EX1GVLCRV0",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
