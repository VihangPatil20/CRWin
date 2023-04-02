function logout() {
    // Clear user data from local storage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentDivision');
    
    // Redirect to sign-up page
    window.location.href = 'signup.html';
  }
  