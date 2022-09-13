// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAw0I9XG6EOdoaqv3kfVEWG5Y660H5taM",
  authDomain: "medium-clone-replit-71119.firebaseapp.com",
  projectId: "medium-clone-replit-71119",
  storageBucket: "medium-clone-replit-71119.appspot.com",
  messagingSenderId: "367705694306",
  appId: "1:367705694306:web:a18b3edaaf6d583419313b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
