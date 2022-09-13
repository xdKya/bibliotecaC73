import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBhkpMAIN_59J4QefsSDkLeyh7FjkNl6Bc",
    authDomain: "bibliotecaeletronica-97b82.firebaseapp.com",
    projectId: "bibliotecaeletronica-97b82",
    storageBucket: "bibliotecaeletronica-97b82.appspot.com",
    messagingSenderId: "292625422095",
    appId: "1:292625422095:web:e6aa0a8ca31f0dc199107a"
  };

  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();