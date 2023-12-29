import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKK0ZMjiNTrwzOqLhXighLTOTJjvBUzNU",
  authDomain: "nwitter-reloaded-125d0.firebaseapp.com",
  projectId: "nwitter-reloaded-125d0",
  storageBucket: "nwitter-reloaded-125d0.appspot.com",
  messagingSenderId: "862395040228",
  appId: "1:862395040228:web:ead2e02a4b6776ba8f47f1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
