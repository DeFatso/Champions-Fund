// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIXiPjT9bDoKN3lnG5jQ8FQbqDCf6qXEY",
    authDomain: "champions-foundation.firebaseapp.com",
    projectId: "champions-foundation",
    storageBucket: "champions-foundation.appspot.com",
    messagingSenderId: "300423618431",
    appId: "1:300423618431:web:aa48505689aa21c230044a",
    measurementId: "G-GY0J0H3BD0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
