import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNP4z1_SH-ViCyeJ8zj_EX7WnWgRP7oEQ",
    authDomain: "clone-f891c.firebaseapp.com",
    databaseURL: "https://clone-f891c.firebaseio.com",
    projectId: "clone-f891c",
    storageBucket: "clone-f891c.appspot.com",
    messagingSenderId: "729025670876",
    appId: "1:729025670876:web:d8ef9a92939a9ddf0e0e19",
    measurementId: "G-JJNBPMEL3J"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};