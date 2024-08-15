// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJX6HxQ5AGdyTxN4tn146w77o6PrfaC7A",
  authDomain: "learnbasic-38e96.firebaseapp.com",
  projectId: "learnbasic-38e96",
  storageBucket: "learnbasic-38e96.appspot.com",
  messagingSenderId: "52433441576",
  appId: "1:52433441576:web:d661a56cf4386c0c3ab61d",
  measurementId: "G-YVBR1VQWW2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
