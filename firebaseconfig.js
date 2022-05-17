// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/storage';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDanrk42Q8ciDfM2YCN2son-ZMePQUW19k",
    authDomain: "wcam-ads.firebaseapp.com",
    projectId: "wcam-ads",
    storageBucket: "wcam-ads.appspot.com",
    messagingSenderId: "161089607510",
    appId: "1:161089607510:web:4c3a90ef82714a879da8f7",
    measurementId: "G-47QWE5SVRY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
//export var storage = firebase.storage().ref();
const db = getFirestore();
export { db };