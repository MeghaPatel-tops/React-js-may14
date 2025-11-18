// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPoHScU6ybn6KQswy3UXcdltI4myFCJEM",
  authDomain: "fir-dbexample-c383c.firebaseapp.com",
  projectId: "fir-dbexample-c383c",
  storageBucket: "fir-dbexample-c383c.firebasestorage.app",
  messagingSenderId: "181560536318",
  appId: "1:181560536318:web:43004266b55d042b0109af",
  measurementId: "G-VZG85J906Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);