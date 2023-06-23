// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEQLOLTu0wX5DVNsrOsTKlCn_K__dFuJQ",
  authDomain: "tp-final-react-e4546.firebaseapp.com",
  projectId: "tp-final-react-e4546",
  storageBucket: "tp-final-react-e4546.appspot.com",
  messagingSenderId: "423083384878",
  appId: "1:423083384878:web:ba853bc46a16d72080bfbf",
  measurementId: "G-VBH2TEYWVR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)