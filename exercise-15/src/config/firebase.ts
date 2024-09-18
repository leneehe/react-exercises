// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDySyx0Cw2NmRwIYP6QtGnHcNfZTGeO_Sw",
  authDomain: "react-beginner-90c25.firebaseapp.com",
  projectId: "react-beginner-90c25",
  storageBucket: "react-beginner-90c25.appspot.com",
  messagingSenderId: "1092675735689",
  appId: "1:1092675735689:web:b854ced6d71b71ad7bf658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app)