// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD0SZD5eLF8Dn9LNpWW-_SKG_tk8K3JmGM",
  authDomain: "iskolar-187.firebaseapp.com",
  projectId: "iskolar-187",
  storageBucket: "iskolar-187.firebasestorage.app",
  messagingSenderId: "978526266719",
  appId: "1:978526266719:web:e94120013d46a9ed1782ea",
  measurementId: "G-H121WKV3J7"
};


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);


