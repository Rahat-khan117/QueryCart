// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmKZ3Hn-aDyBTkoUEIwnaWJXhGwbHqm8Q",
  authDomain: "assignment-112-db256.firebaseapp.com",
  projectId: "assignment-112-db256",
  storageBucket: "assignment-112-db256.firebasestorage.app",
  messagingSenderId: "30041624546",
  appId: "1:30041624546:web:9f6f0cd549ad3cd9b7b3bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)