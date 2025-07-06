// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaUrDPjyOvsD6F2bh12hRJFYPlBqGY3T0",
  authDomain: "fir-b6095.firebaseapp.com",
  projectId: "fir-b6095",
  storageBucket: "fir-b6095.appspot.com", // corrected from 'firebasestorage.app'
  messagingSenderId: "978188623725",
  appId: "1:978188623725:web:bfa3be733535e54ade0464",
  measurementId: "G-4EK0SBRZP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
