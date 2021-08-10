import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



//ejemplo de config

const firebaseConfig = {
    apiKey: "AIzaSyCga0qxOzVqkMDKvSGTQoMfCKltWB9TV0o",
    authDomain: "asingnacion1-javier.firebaseapp.com",
    // databaseURL: "https://asingnacion1-javier-default-rtdb.firebaseio.com/",
    projectId: "asingnacion1-javier",
    storageBucket: "asingnacion1-javier.appspot.com",
    messagingSenderId: "610265343854",
    appId: "1:610265343854:web:7c9e51c4c9a27587ea437f"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const faceboogAuthProvider = new firebase.auth.FacebookAuthProvider();



export {
    db,
    googleAuthProvider,
    faceboogAuthProvider,
    firebase
}


