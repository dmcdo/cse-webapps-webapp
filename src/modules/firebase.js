// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu-QcMZ6ZiwrXwr5Xz8teWkT0Zi8Zio0U",
  authDomain: "todo-list-fdac3.firebaseapp.com",
  projectId: "todo-list-fdac3",
  storageBucket: "todo-list-fdac3.appspot.com",
  messagingSenderId: "161950295983",
  appId: "1:161950295983:web:e814a9161bb9042f64715a",
  measurementId: "G-7GZY2PR4MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Export the Firestore database instance
// export const db = firebase.firestore();

// Export the authentication module
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
