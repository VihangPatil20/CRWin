function logout() {
  // Clear user data from local storage
  localStorage.removeItem('currentUser');
  localStorage.removeItem('currentDivision');
  localStorage.removeItem('hasVoted');
  
  // Redirect to sign-up page
  window.location.href = 'signup.html';
  
}
