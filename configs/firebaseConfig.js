// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4bvr8rMsUYk1j1HppO_cuzAQSVeQd8N4",
  authDomain: "travel-app-c35cf.firebaseapp.com",
  projectId: "travel-app-c35cf",
  storageBucket: "travel-app-c35cf.firebasestorage.app",
  messagingSenderId: "287411562618",
  appId: "1:287411562618:web:2e36786fd656d56d5df3c3",
  measurementId: "G-XC955BV502"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// database for stroing UserTrip after AI prompt
export const db = getFirestore(app);