// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
const db = app.firestore();
const auth = getAuth();
const provider = new auth.GoogleAuthProvider();
const storage = getStorage();

export { auth, storage, provider };
export default db;