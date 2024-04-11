// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tech-insights-592fc.firebaseapp.com",
  projectId: "tech-insights-592fc",
  storageBucket: "tech-insights-592fc.appspot.com",
  messagingSenderId: "884433485442",
  appId: "1:884433485442:web:7570a626b9f69f5ea9fe9b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);