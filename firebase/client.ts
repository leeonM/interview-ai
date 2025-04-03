// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsqItPC63fM2sECnvu-TsWAFiiXoqw2no",
    authDomain: "interview-ai-5a00b.firebaseapp.com",
    projectId: "interview-ai-5a00b",
    storageBucket: "interview-ai-5a00b.firebasestorage.app",
    messagingSenderId: "302349972197",
    appId: "1:302349972197:web:c71f31cce459df8860da0c",
    measurementId: "G-73H6278G75"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
