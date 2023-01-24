// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      localStorage.setItem("user", JSON.stringify(result.user));
    })
    .catch((error) => alert(error));
