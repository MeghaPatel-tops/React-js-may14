import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPoHScU6ybn6KQswy3UXcdltI4myFCJEM",
  authDomain: "fir-dbexample-c383c.firebaseapp.com",
  projectId: "fir-dbexample-c383c",
  storageBucket: "fir-dbexample-c383c.firebasestorage.app",
  messagingSenderId: "181560536318",
  appId: "1:181560536318:web:43004266b55d042b0109af",
  measurementId: "G-VZG85J906Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);