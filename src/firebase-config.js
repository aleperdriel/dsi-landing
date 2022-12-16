// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, EmailAuthProvider, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnxOqvFXjyED4qQhL6KXM0dIKYlOhCQfg",
  authDomain: "dsi-landing.firebaseapp.com",
  projectId: "dsi-landing",
  storageBucket: "dsi-landing.appspot.com",
  messagingSenderId: "998702857396",
  appId: "1:998702857396:web:0ea55f69d8d07e12cf2be1",
  measurementId: "G-1JSGVGHBNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new EmailAuthProvider();


export const logInEmail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  signOut(auth);
};