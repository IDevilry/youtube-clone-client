import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "clone-c47c8.firebaseapp.com",
  projectId: "clone-c47c8",
  storageBucket: "clone-c47c8.appspot.com",
  messagingSenderId: "207220178470",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export default app;
