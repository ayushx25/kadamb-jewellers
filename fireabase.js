// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxHx8nDK9-ztKvH1SFdOgoBN5ygy4MDXk",
  authDomain: "kadamb-jewellers.firebaseapp.com",
  projectId: "kadamb-jewellers",
  storageBucket: "kadamb-jewellers.firebasestorage.app",
  messagingSenderId: "198355248653",
  appId: "1:198355248653:web:46484469b108c02f061744",
  measurementId: "G-S05QLYJCM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);