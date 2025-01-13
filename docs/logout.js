// Import Firebase Auth SDK
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwZaQOLvxAtM_aoO1AqsEOlbRGMBh1JNY",
  authDomain: "sia2pipelineactivity.firebaseapp.com",
  projectId: "sia2pipelineactivity",
  storageBucket: "sia2pipelineactivity.firebasestorage.app",
  messagingSenderId: "732439095208",
  appId: "1:732439095208:web:0d3062c7311471ccba9f9d",
  measurementId: "G-85VMJFVQJQ"
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
