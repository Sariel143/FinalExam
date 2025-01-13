// Import Firebase Authentication SDK
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDawz_TAF3dK9wV7j_5aBFhocJKIqc3kbk",
  authDomain: "sia2finals.firebaseapp.com",
  projectId: "sia2finals",
  storageBucket: "sia2finals.firebasestorage.app",
  messagingSenderId: "621082868987",
  appId: "1:621082868987:web:7eb5cbb1f5f25fbbd0445e",
  measurementId: "G-NLWNRVY1BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Authenticate user with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful, redirect to the user dashboard
      alert('Login successful!');
      window.location.href = 'index.html';  // Redirect to user dashboard
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Error: ' + errorMessage);  // Show error if login fails
    });
});
