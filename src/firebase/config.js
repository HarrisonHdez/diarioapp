// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo4iTe_T2OYeasjcPKHX4Blpb2s0iM7MM",
  authDomain: "react-cursos-bbe29.firebaseapp.com",
  projectId: "react-cursos-bbe29",
  storageBucket: "react-cursos-bbe29.appspot.com",
  messagingSenderId: "228944110940",
  appId: "1:228944110940:web:b8fadc5544ef5307e58d99",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
