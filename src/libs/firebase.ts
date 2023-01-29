// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWmu4ucAhHerz93jfNAVVgO7kuoZn1JmY",
  authDomain: "r-chat-c463f.firebaseapp.com",
  projectId: "r-chat-c463f",
  storageBucket: "r-chat-c463f.appspot.com",
  messagingSenderId: "514787125968",
  appId: "1:514787125968:web:ec3d0e5aafea28fed18cd5",
  measurementId: "G-ZQGR47C5TD",
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const authFirebase = getAuth(appFirebase);

export const providerGoogleFirebase = new GoogleAuthProvider();
