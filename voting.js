function validateUser(division) {
    // Get user's division from local storage
    var userDivision = localStorage.getItem('division');
  
    // Check if user has access to the selected division
    if (userDivision === division) {
      // Redirect to respective page based on selected division
      if (division === 'A') {
        window.location.href = 'classA.html';
      } else if (division === 'B') {
        window.location.href = 'classB.html';
      } else if (division === 'C') {
        window.location.href = 'classC.html';
      }
    } else {
      // Display alert if user does not have access to the selected division
      alert('You do not have access to this division');
    }
  }
  