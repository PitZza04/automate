import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { API_KEY } from "@env";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "auto-mate-dev.firebaseapp.com",
  projectId: "auto-mate-dev",
  storageBucket: "auto-mate-dev.appspot.com",
  messagingSenderId: "846926461223",
  appId: "1:846926461223:web:54037b34b678dfdab5d102",
  measurementId: "G-EBVR89F61W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
