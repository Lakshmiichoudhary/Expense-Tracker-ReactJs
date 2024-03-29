import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth" 
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGFperN0qKNQRp6L6gUxoHKz-sQFhzVrE",
  authDomain: "expensetracker-ba02e.firebaseapp.com",
  projectId: "expensetracker-ba02e",
  storageBucket: "expensetracker-ba02e.appspot.com",
  messagingSenderId: "8688605653",
  appId: "1:8688605653:web:af064c0c88556580d4855c",
  measurementId: "G-RYSH1880PP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app); 