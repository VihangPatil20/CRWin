// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDTGTNXn5BKQTKEQKG0bx6KwJZ2NGw7pUc",
    authDomain: "crwin-db.firebaseapp.com",
    projectId: "crwin-db",
  });
  
  /// Reference the 'voting' collection in Firestore
  const db = firebase.firestore().collection('voting A');
  // set max number of votes
  const maxVotes = 65;
  
  // get elements for each candidate
  const candidate1 = document.querySelector('.card:nth-of-type(1)');
  const candidate2 = document.querySelector('.card:nth-of-type(2)');
  const candidate3 = document.querySelector('.card:nth-of-type(3)');
  
  // set initial vote counts to 0
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  
  // check if user has voted
  const hasVoted = sessionStorage.getItem('hasVoted');
  if (hasVoted) {
    // disable voting buttons
    candidate1.removeEventListener('click', handleClick);
    candidate2.removeEventListener('click', handleClick);
    candidate3.removeEventListener('click', handleClick);
  } else {
    // add click event listener to each candidate element
    candidate1.addEventListener('click', handleClick);
    candidate2.addEventListener('click', handleClick);
    candidate3.addEventListener('click', handleClick);
  }
  
  function handleClick(event) {
    if ((count1 + count2 + count3) < maxVotes) {
      switch (event.target) {
        case candidate1:
          count1++;
          break;
        case candidate2:
          count2++;
          break;
        case candidate3:
          count3++;
          break;
      }
      updateVotes();
      updateFirestore();
      // set hasVoted flag in sessionStorage
      sessionStorage.setItem('hasVoted', true);
      // log user and time of vote
      console.log(`User ${firebase.auth().currentUser.uid} voted at ${new Date().toLocaleString()}`);
      // remove click event listeners to prevent further voting
      candidate1.removeEventListener('click', handleClick);
      candidate2.removeEventListener('click', handleClick);
      candidate3.removeEventListener('click', handleClick);
    }
  }
  
  // function to update vote counts and display counts and percentages
  function updateVotes() {
    // calculate percentage of votes for each candidate
    const total = count1 + count2 + count3;
    const percent1 = Math.round((count1 / total) * 100);
    const percent2 = Math.round((count2 / total) * 100);
    const percent3 = Math.round((count3 / total) * 100);
  
    // update vote count and percentage display for each candidate
    candidate1.querySelector('.poll__option-info').textContent = `${count1} votes (${percent1}%)`;
    candidate2.querySelector('.poll__option-info').textContent = `${count2} votes (${percent2}%)`;
    candidate3.querySelector('.poll__option-info').textContent = `${count3} votes (${percent3}%)`;
  }
  
  // function to update vote counts in Firestore
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
  