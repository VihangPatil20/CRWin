
// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDTGTNXn5BKQTKEQKG0bx6KwJZ2NGw7pUc",
    authDomain: "crwin-db.firebaseapp.com",
    projectId: "crwin-db",
  });
  
  /// Reference the 'voting' collection in Firestore
  const db = firebase.firestore().collection('voting B');
  
    // Set max number of votes
  const maxVotes = 65;
  
  // Get elements for each candidate
  const candidate1 = document.querySelector('.card:nth-of-type(1)');
  const candidate2 = document.querySelector('.card:nth-of-type(2)');
  const candidate3 = document.querySelector('.card:nth-of-type(3)');
  
  // Set initial vote counts to 0
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  
  // Add click event listener to each candidate element
  candidate1.addEventListener('click', () => {
    if ((count1 + count2 + count3) < maxVotes) {
      if (confirm("Are you sure you want to vote for candidate 1?")) {
        count1++;
        updateVotes();
        updateFirestore();
      }
    }
  });
  
  candidate2.addEventListener('click', () => {
    if ((count1 + count2 + count3) < maxVotes) {
      if (confirm("Are you sure you want to vote for candidate 2?")) {
        count2++;
        updateVotes();
        updateFirestore();
      }
    }
  });
  
  candidate3.addEventListener('click', () => {
    if ((count1 + count2 + count3) < maxVotes) {
      if (confirm("Are you sure you want to vote for candidate 3?")) {
        count3++;
        updateVotes();
        updateFirestore();
      }
    }
  });
  
  // Function to update vote counts and display counts and percentages
  function updateVotes() {
    // Calculate percentage of votes for each candidate
    const total = count1 + count2 + count3;
    const percent1 = Math.round((count1 / total) * 100);
    const percent2 = Math.round((count2 / total) * 100);
    const percent3 = Math.round((count3 / total) * 100);
  
    // Update vote count and percentage display for each candidate
    candidate1.querySelector('.poll__option-info').textContent = `${count1} votes (${percent1}%)`;
    candidate2.querySelector('.poll__option-info').textContent = `${count2} votes (${percent2}%)`;
    candidate3.querySelector('.poll__option-info').textContent = `${count3} votes (${percent3}%)`;
  }
  
  // Function to update vote counts in Firestore
  function updateFirestore() {
    db.doc('voteCounts').set({
      count1: count1,
      count2: count2,
      count3: count3
    })
    .then(() => {
      console.log('Vote counts updated in Firestore');
    })
    .catch((error) => {
      console.error('Error updating vote counts in Firestore: ', error);
    });
  }