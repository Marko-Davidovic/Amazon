import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGoFVs7l0E1r8SCUii7XJ9tZ5TlPtDrms",
    authDomain: "clone-df1c0.firebaseapp.com",
    databaseURL: "https://clone-df1c0.firebaseio.com",
    projectId: "clone-df1c0",
    storageBucket: "clone-df1c0.appspot.com",
    messagingSenderId: "40144343191",
    appId: "1:40144343191:web:237ceefc95d46ddb8999d2",
    measurementId: "G-H447LC9K5N"
 };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};