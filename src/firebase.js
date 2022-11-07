// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDdvUFVgNyzH1TQR8AZYSjsmvHNswo4utQ",
    authDomain: "aliexpress-clone-cf058.firebaseapp.com",
    projectId: "aliexpress-clone-cf058",
    storageBucket: "aliexpress-clone-cf058.appspot.com",
    messagingSenderId: "825730827815",
    appId: "1:825730827815:web:78cb293a642cdd82c4f002",
    measurementId: "G-7QM1FL2XXL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const productsDB = getFirestore(firebaseApp)

  export { db, auth, productsDB };