// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4VMBUCoys2JIo2h9fSKTJ_nGIK0Ez4I4",
  authDomain: "e-commerce-react-4e6d7.firebaseapp.com",
  projectId: "e-commerce-react-4e6d7",
  storageBucket: "e-commerce-react-4e6d7.appspot.com",
  messagingSenderId: "84073702860",
  appId: "1:84073702860:web:3ef873ea50cd482ecda969"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);