// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "shecodes-9d5d9.firebaseapp.com",
  projectId: "shecodes-9d5d9",
  storageBucket: "shecodes-9d5d9.appspot.com",
  messagingSenderId: "513627687908",
  appId: "1:513627687908:web:97a8b5e0c62c93256bd5f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);

