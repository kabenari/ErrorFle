import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDh4vbja7PIt2skl_OfekLyGDQYI9ejiqQ",
  authDomain: "insta-final-840f9.firebaseapp.com",
  projectId: "insta-final-840f9",
  storageBucket: "insta-final-840f9.appspot.com",
  messagingSenderId: "658674336576",
  appId: "1:658674336576:web:aff1d09e12073f775ab0a5",
  measurementId: "G-7773Y5GJKP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
