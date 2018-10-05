import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBqEqiNzvbATwgl66nH4U-vNjT1TEMIIpw",
    authDomain: "comments-react-js.firebaseapp.com",
    databaseURL: "https://comments-react-js.firebaseio.com",
    projectId: "comments-react-js",
    storageBucket: "comments-react-js.appspot.com",
    messagingSenderId: "934156748553"
  };
  firebase.initializeApp(config);

  export const database = firebase.database();
  export const auth = firebase.auth();