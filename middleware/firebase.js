// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTV25XDe3yH7gvSocO8J8zsBNAb0hTRHQ",
  authDomain: "prasetya-mainweb.firebaseapp.com",
  projectId: "prasetya-mainweb",
  storageBucket: "prasetya-mainweb.appspot.com",
  messagingSenderId: "38056637182",
  appId: "1:38056637182:web:b3d06440fa35fe08b26baf",
  measurementId: "G-70HN17KEVP",
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default app;
export { db };
