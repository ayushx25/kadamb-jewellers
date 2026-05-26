// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDxHx8nDK9-ztKvH1SFdOgoBN5ygy4MDXk",
  authDomain: "kadamb-jewellers.firebaseapp.com",
  projectId: "kadamb-jewellers",
  storageBucket: "kadamb-jewellers.firebasestorage.app",
  messagingSenderId: "198355248653",
  appId: "1:198355248653:web:46484469b108c02f061744",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
const db = getFirestore(app);

// Firebase Authentication
const auth = getAuth(app);

// Export both
export { db, auth };