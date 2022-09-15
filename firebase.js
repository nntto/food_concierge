// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVrqlzeb_JCfh_85pC5F6pOWHd37awAEo",
  authDomain: "food-concierge.firebaseapp.com",
  projectId: "food-concierge",
  storageBucket: "food-concierge.appspot.com",
  messagingSenderId: "8021312213",
  appId: "1:8021312213:web:df1424e63041ebb76f185c",
  measurementId: "G-QRZDL8XB0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);