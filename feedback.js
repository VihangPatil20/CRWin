// Initialize Firebase
var config = {
    apiKey: "AIzaSyDTGTNXn5BKQTKEQKG0bx6KwJZ2NGw7pUc",
    authDomain: "crwin-db.firebaseapp.com",
    databaseURL: "https://crwin-db-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "crwin-db",
    storageBucket: "crwin-db.appspot.com",
    messagingSenderId: "360870367139",
    appId: "1:360870367139:web:c9f5a0867c920c38049416"
  };
  
  function sentfeedback(){
    firebase.initializeApp(config);
    
    // Get a reference to the database service
    var database = firebase.database();
  
    // Get a reference to the feedback form
    var form = document.getElementById("feedback-form");
  
    // Listen for the form submit event
    form.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the user input values
      var name = form.elements["name"].value;
      var email = form.elements["email"].value;
      var message = form.elements["message"].value;
  
      // Check if all fields are filled
      if (!name || !email || !message) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill in all fields!',
        });
        return;
      }
  
      // Create a new feedback object
      var feedback = {
        name: name,
        email: email,
        message: message,
      };
  
      // Save the feedback object to the Firebase Realtime Database
      database.ref("feedback").push(feedback)
        .then(function() {
          // Clear the form
          form.reset();
  
          // Show a success message to the user
          Swal.fire({
            icon: 'success',
            title: 'Thank you for your feedback!',
          });
        })
        .catch(function(error) {
          // Show an error message to the user
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again later.',
          });
        });
    });
  }
  