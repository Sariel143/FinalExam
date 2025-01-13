// Import Firebase Auth SDK
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRWHg-kC_MzMnMUAF4IkgPyY6LbOoQT00",
  authDomain: "sia2pipeline-251dd.firebaseapp.com",
  projectId: "sia2pipeline-251dd",
  storageBucket: "sia2pipeline-251dd.firebasestorage.app",
  messagingSenderId: "109506453905",
  appId: "1:109506453905:web:3f4ba60c7198b15769ba30",
  measurementId: "G-GY2VT83RGV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign out the user
signOut(auth).then(() => {
  // Redirect to login page after logging out
  window.location.href = 'login.html';
}).catch((error) => {
  console.error('Error signing out: ', error);
});
