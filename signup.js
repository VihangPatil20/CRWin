// Your web app's Firebase configuration
var firebaseConfig = {
    // your Firebase config goes here
    apiKey: "AIzaSyDTGTNXn5BKQTKEQKG0bx6KwJZ2NGw7pUc",
    authDomain: "crwin-db.firebaseapp.com",
    databaseURL: "https://crwin-db-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "crwin-db",
    storageBucket: "crwin-db.appspot.com",
    messagingSenderId: "360870367139",
    appId: "1:360870367139:web:c9f5a0867c920c38049416"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Get a reference to the database service
var database = firebase.database();

function login() {
  // Get form values
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Perform basic form validation
  if (!email || !password) {
    Swal.fire("Please fill in all the fields");
    return;
  }

  // Check if user exists in the database
  var usersRef = database.ref('users');
  usersRef.orderByChild('email').equalTo(email).once('value', function(snapshot) {
    if (snapshot.exists()) {
      snapshot.forEach(function(childSnapshot) {
        var user = childSnapshot.val();
        // Check if the password matches
        if (password == atob(user.password)) {
          // Store the user data in local storage
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('currentDivision', user.division);
          // Redirect to home page
          window.location.href = 'home-page.component.html';
        } else {
          Swal.fire('Incorrect password');
        }
      });
    } else {
      Swal.fire('A user with this email address does not exist');
    }
  });
}
