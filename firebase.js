// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3K92uzt52P-MkGH8pZXofllrvZFm8W_0",
    authDomain: "instagram-2-79fa1.firebaseapp.com",
    projectId: "instagram-2-79fa1",
    storageBucket: "instagram-2-79fa1.appspot.com",
    messagingSenderId: "1047723447715",
    appId: "1:1047723447715:web:8bd082e0a3b5ad334bf616"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()
export { app, db, storage }