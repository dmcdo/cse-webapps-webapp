// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaxOm6tKyR0Zff0DGZ0OewKC6yU_LqzIs",
  authDomain: "todo-list-e43aa.firebaseapp.com",
  projectId: "todo-list-e43aa",
  storageBucket: "todo-list-e43aa.appspot.com",
  messagingSenderId: "440345328633",
  appId: "1:440345328633:web:1b683e4ba16745346bdb28",
  measurementId: "G-7LECY4DG61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Export the Firestore database instance
// export const db = firebase.firestore();

// Export the authentication module
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
