import React, {useEffect, useState} from 'react';
import firebase from "../../node_modules/firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB2UTZVlN6SylRkh4wjtRmqaX0coIoDzaw",
    authDomain: "teenai.firebaseapp.com",
    projectId: "teenai",
    storageBucket: "teenai.appspot.com",
    messagingSenderId: "353337037097",
    appId: "1:353337037097:web:8a1413fed982c36d16a738"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


const SignInButton = ({text}) => {
  const SignIn = async () => {
    await auth.signInWithPopup(provider)
    .then((results) => {
      if(!results) return;
      const data = results.user;
      const dataDepth = {
        "name": data.displayName,
        "photoUrl": data.photoURL,
        "email": data.email
      }
      localStorage.setItem("user", JSON.stringify(dataDepth));
      window.location.pathname = "/logged-in"
    })
  }
  return (
    <button onClick={SignIn} className="button">
      <p>{text}</p>
    </button>
  )
}
        
export default SignInButton;
