// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVRloI9Xi0kX0UQW-rl0_mY1AVgIsh1Ps",
  authDomain: "eyecon-9b097.firebaseapp.com",
  projectId: "eyecon-9b097",
  storageBucket: "eyecon-9b097.appspot.com",
  messagingSenderId: "332777743729",
  appId: "1:332777743729:web:2caff44015df249419c2d0",
  measurementId: "G-YLDZHB3D55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;