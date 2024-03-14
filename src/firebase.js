// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK_Q5DjrnJO8I5WU-6F-MiE4sdoiloYmo",
  authDomain: "reelreview-cpsc362.firebaseapp.com",
  projectId: "reelreview-cpsc362",
  storageBucket: "reelreview-cpsc362.appspot.com",
  messagingSenderId: "197926046987",
  appId: "1:197926046987:web:53616202b8ef5845c4260e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
