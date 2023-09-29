import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
