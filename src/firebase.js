// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseApp } from "firebase/firestore";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx7SUFdwC4kdSqDVJ_SQLF4OcEuJwJItQ",
  authDomain: "disney-clone-16168.firebaseapp.com",
  projectId: "disney-clone-16168",
  storageBucket: "disney-clone-16168.appspot.com",
  messagingSenderId: "973506288787",
  appId: "1:973506288787:web:dd41c3e2321e7a2d834166",
  measurementId: "G-00G6NSL44E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, storage, provider };
export default db;