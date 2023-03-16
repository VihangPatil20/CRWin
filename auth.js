// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAAG79_O_E-nszPpNuS3ACYn5UVj0Ygz08Y",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "https://crwin-1dbd6-default-rtdb.firebaseio.com/",
    projectId: "crwin-1dbd6",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "317785611952",
    appId: "1:317785611952:web:3bf3aeb5a0673c5cdde575"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firebase authentication service
  const auth = firebase.auth();
  
  // Get a reference to the sign-up form and its inputs
  const signUpForm = document.querySelector('#signup-form');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  
  // Set up an event listener for the sign-up form
  signUpForm.addEventListener('submit', (event) => {
    // Prevent the form from submitting the traditional way
    event.preventDefault();
  
    // Get the email and password entered by the user
    const email = emailInput.value;
    const password = passwordInput.value;
  
    // Create a new user with the email and password
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log(`User signed up: ${user.email}`);
  
        // Redirect to the dashboard page
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        // An error occurred during sign-up
        console.error(error);
      });
  });
  
  

  