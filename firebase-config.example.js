// firebase-config.js
// 1) Create a Firebase project.
// 2) Register a Web app.
// 3) Create a Realtime Database.
// 4) Copy the Firebase web config into public/index.html where YOUR_* appears.
// This file is only a reference and is not loaded by the app.
export const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
