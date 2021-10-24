import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpJikRG-lTF1NR284i5pIu7qpC5Fen2Fc",
  authDomain: "blood-donate-fdf17.firebaseapp.com",
  databaseURL: "https://blood-donate-fdf17-default-rtdb.firebaseio.com",
  projectId: "blood-donate-fdf17",
  storageBucket: "blood-donate-fdf17.appspot.com",
  messagingSenderId: "478634739707",
  appId: "1:478634739707:web:a9ce5764df8c0916186d5e"
};


  export const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const userRef = firebaseApp.database().ref("user");

  export const postRef = firebaseApp.database().ref("posts");

  export const storageRef = firebaseApp.storage();