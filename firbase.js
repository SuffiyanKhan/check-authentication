// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhJynEXxpkGBbJGLtmHsKHLuf_lMPrOVk",
    authDomain: "e-commerce-137db.firebaseapp.com",
    projectId: "e-commerce-137db",
    storageBucket: "e-commerce-137db.appspot.com",
    messagingSenderId: "600979336891",
    appId: "1:600979336891:web:0cf2072d1e73e5a9e4839e",
    measurementId: "G-7L3PZ5B4P3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {
    auth, RecaptchaVerifier, signInWithPhoneNumber
}