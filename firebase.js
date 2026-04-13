// firebase.js - Firebase Configuration and Initialization

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
const firebaseConfig = {
  apiKey: "AIzaSyBzOWPZ5UhoJte2LRNo7YtRQD_-mx7Rb5E",
  authDomain: "greenlens-6cd3e.firebaseapp.com",
  projectId: "greenlens-6cd3e",
  storageBucket: "greenlens-6cd3e.firebasestorage.app",
  messagingSenderId: "698372050167",
  appId: "1:698372050167:web:982a02c2a1d94586ff17f2",
  measurementId: "G-HBSYVFBNJY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };