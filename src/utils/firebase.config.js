import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-f905d.firebaseapp.com",
  projectId: "react-firebase-f905d",
  storageBucket: "react-firebase-f905d.appspot.com",
  messagingSenderId: "701173833277",
  appId: "1:701173833277:web:879d9313abd86753a6d454"
});

export const auth = app.auth();
export default app;