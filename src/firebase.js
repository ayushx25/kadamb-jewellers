// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxHx8nDK9-ztKvH1SFdOgoBN5ygy4MDXk",
  authDomain: "kadamb-jewellers.firebaseapp.com",
  projectId: "kadamb-jewellers",
  storageBucket: "kadamb-jewellers.firebasestorage.app",
  messagingSenderId: "198355248653",
  appId: "1:198355248653:web:46484469b108c02f061744"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);