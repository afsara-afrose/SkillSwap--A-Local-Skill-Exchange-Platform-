// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA7o3kOhtnhf5kf4HqaEPjandrlGjB7_Vw",
  authDomain: "skillswap-auth-96d09.firebaseapp.com",
  projectId: "skillswap-auth-96d09",
  storageBucket: "skillswap-auth-96d09.firebasestorage.app",
  messagingSenderId: "796455472521",
  appId: "1:796455472521:web:2d37fa0b19d2adb8bb2558",
  measurementId: "G-NV12DN94SK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);