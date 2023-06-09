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

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function submitFormData() {
  // Get form values
  var fullName = document.getElementById('full-name').value;
  var rollNo = document.getElementById('roll-no').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Get selected division
  var division = document.getElementById('division').value;

  // Store division value in local storage
  localStorage.setItem('currentDivision', division);

  // Perform basic form validation
  if (!fullName || !rollNo || !email || !password) {
    Swal.fire("Please fill in all the fields");
    return;
  }

  // Validate roll no format
  var rollNoPattern = /^\d+$/;
  if (!rollNoPattern.test(rollNo)) {
    Swal.fire("Please enter a valid roll number");
    return;
  }

  // Validate email format
  var emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailPattern.test(email)) {
    Swal.fire("Please enter a valid email address");
    return;
  }

  // Encrypt the password
  var encryptedPassword = btoa(password);

  // Check if user already exists
  var usersRef = database.ref('users');
  usersRef.orderByChild('rollNo').equalTo(rollNo).once('value', function(snapshot) {
    if (snapshot.exists()) {
      Swal.fire('Error', 'A user with the same roll number already exists', 'error');
    } else {
      usersRef.orderByChild('email').equalTo(email).once('value', function(snapshot) {
        if (snapshot.exists()) {
          Swal.fire('Error', 'A user with the same email address already exists', 'error');
        } else {
          // Push form data to Firebase
          var newUserRef = usersRef.push();
          newUserRef.set({
            fullName: fullName,
            rollNo: rollNo,
            email: email,
            password: encryptedPassword,
            role: 'student',
            division: division
          });

          // Log current user and division on the console
          console.log('Current User:', email);
          console.log('Division:', division);

          // Clear form fields
          document.getElementById('full-name').value = '';
          document.getElementById('roll-no').value = '';
          document.getElementById('email').value = '';
          document.getElementById('password').value = '';

          // Redirect to home page
          window.location.href = 'home-page.component.html';

          Swal.fire({
            icon: 'success',
            title: 'Your account has been successfully created',
          });
        }
      });
    }
  });
}

