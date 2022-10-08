// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0qUkzZzWLVWfVLtq3rxdIjDDeCRLTsy4",
  authDomain: "fir-blog-36f7a.firebaseapp.com",
  projectId: "fir-blog-36f7a",
  storageBucket: "fir-blog-36f7a.appspot.com",
  messagingSenderId: "1037208270630",
  appId: "1:1037208270630:web:624cd5439771e4c7e4f3e7",
  measurementId: "G-RXNBVDG0V3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
