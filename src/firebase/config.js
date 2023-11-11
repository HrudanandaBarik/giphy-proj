// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCABhcU0l-0TtkHc6Rk586K1tVPMzKVPOI",
  authDomain: "giphy-proj.firebaseapp.com",
  projectId: "giphy-proj",
  storageBucket: "giphy-proj.appspot.com",
  messagingSenderId: "862157996047",
  appId: "1:862157996047:web:5f54e926322cd33456237a",
  measurementId: "G-0GNHNS4243"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export {auth, app};