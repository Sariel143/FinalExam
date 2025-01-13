// Import Firebase Authentication SDK
import { getAuth, signInWithEmailAndPassword, sendEmailVerification, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Authenticate user with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Check if the email is verified
      if (user.emailVerified) {
        alert('Login successful!');
        window.location.href = 'index.html';  // Redirect to user dashboard
      } else {
        // If email is not verified, send verification email
        sendEmailVerification(user)
          .then(() => {
            alert('Please verify your email. A verification link has been sent.');
          })
          .catch((error) => {
            alert('Error sending verification email: ' + error.message);
          });
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Error: ' + errorMessage);  // Show error if login fails
    });
});

// Handle OTP login (for the case of OTP email verification)
if (isSignInWithEmailLink(auth, window.location.href)) {
  // Retrieve the stored email from localStorage
  const email = window.localStorage.getItem('emailForSignIn'); 

  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // OTP verification successful
      alert('OTP verification successful!');
      window.location.href = 'index.html';  // Redirect to user dashboard
    })
    .catch((error) => {
      alert('Error during OTP verification: ' + error.message);
    });
}

// Optionally, you can add logic to send an OTP via email before login attempt
function sendOTP(email) {
  const actionCodeSettings = {
    // The URL you want to redirect back to. The domain (www.example.com) for this
    //   one must be in the authorized domains list in the Firebase Console.
    url: 'http://www.example.com/finishSignUp?email=' + email,
    handleCodeInApp: true,
  };

  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Save the email locally for later use
      window.localStorage.setItem('emailForSignIn', email);
      alert('OTP sent to your email. Please check your inbox.');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Error sending OTP: ' + errorMessage);
    });
}
