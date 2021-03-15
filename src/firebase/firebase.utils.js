import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAP7HUGjc4aMZGj-F0U0d5ECPZT7zQ_q5k",
  authDomain: "butik-db.firebaseapp.com",
  projectId: "butik-db",
  storageBucket: "butik-db.appspot.com",
  messagingSenderId: "742349556786",
  appId: "1:742349556786:web:cae03e999192e64551002b",
  measurementId: "G-3EYE8QMZYR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
