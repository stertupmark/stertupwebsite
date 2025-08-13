// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEdhYvpODmc8v0DmGXZABkw9yeQMqq0TM",
  authDomain: "stertup-consulting-web.firebaseapp.com",
  projectId: "stertup-consulting-web",
  storageBucket: "stertup-consulting-web.firebasestorage.app",
  messagingSenderId: "1002855849825",
  appId: "1:1002855849825:web:b72e23e4f3d734491e2f20",
  measurementId: "G-Y3ZCR3KQR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);