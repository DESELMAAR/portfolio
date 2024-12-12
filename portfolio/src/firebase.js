import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_LejkE-5yPuoL6oe2gVB9mZHaqZmRzMw",
  authDomain: "auth-d755c.firebaseapp.com",
  projectId: "auth-d755c",
  storageBucket: "auth-d755c.firebasestorage.app",
  messagingSenderId: "621493312342",
  appId: "1:621493312342:web:97a02b9361ebacb19b14f7"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
