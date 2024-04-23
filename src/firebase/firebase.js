// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK_Q5DjrnJO8I5WU-6F-MiE4sdoiloYmo",
  authDomain: "reelreview-cpsc362.firebaseapp.com",
  projectId: "reelreview-cpsc362",
  storageBucket: "reelreview-cpsc362.appspot.com",
  messagingSenderId: "197926046987",
  appId: "1:197926046987:web:53616202b8ef5845c4260e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }