
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

// Check local storage to see if the user has already voted
if (localStorage.getItem('hasVoted')) {
  // User has already voted, disable voting
  candidate1.removeEventListener('click', handleCandidate1Click);
  candidate2.removeEventListener('click', handleCandidate2Click);
  candidate3.removeEventListener('click', handleCandidate3Click);
  Swal.fire({
    title: 'Error',
    text: 'You have already voted.',
    icon: 'error'
  });
} else {
  // User has not voted yet, enable voting
  candidate1.addEventListener('click', handleCandidate1Click);
  candidate2.addEventListener('click', handleCandidate2Click);
  candidate3.addEventListener('click', handleCandidate3Click);
}

function handleCandidate1Click() {
  if ((count1 + count2 + count3) < maxVotes) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to vote for candidate 1?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        count1++;
        updateFirestore();
        localStorage.setItem('hasVoted', true);
        Swal.fire({
          title: 'Success',
          text: 'Thank you for voting!',
          icon: 'success'
        });
        // Disable voting after the user has voted
        candidate1.removeEventListener('click', handleCandidate1Click);
        candidate2.removeEventListener('click', handleCandidate2Click);
        candidate3.removeEventListener('click', handleCandidate3Click);
      }
    })
  } else {
    Swal.fire({
      title: 'Error',
      text: 'You have already voted.',
      icon: 'error'
    });
  }
}

function handleCandidate2Click() {
  if ((count1 + count2 + count3) < maxVotes) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to vote for candidate 2?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        count2++;
        updateFirestore();
        localStorage.setItem('hasVoted', true);
        Swal.fire({
          title: 'Success',
          text: 'Thank you for voting!',
          icon: 'success'
        });
        // Disable voting after the user has voted
        candidate1.removeEventListener('click', handleCandidate1Click);
        candidate2.removeEventListener('click', handleCandidate2Click);
        candidate3.removeEventListener('click', handleCandidate3Click);
      }
    })
  } else {
    Swal.fire({
      title: 'Error',
      text: 'You have already voted.',
      icon: 'error'
    });
  }
}

function handleCandidate3Click() {
  if ((count1 + count2 + count3) < maxVotes) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to vote for candidate 3?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        count3++;
        updateFirestore();
        localStorage.setItem('hasVoted', true);
        Swal.fire({
          title: 'Success',
          text: 'Thank you for voting!',
          icon: 'success'
        });
        // Disable voting after the user has voted
        candidate1.removeEventListener('click', handleCandidate1Click);
        candidate2.removeEventListener('click', handleCandidate2Click);
        candidate3.removeEventListener('click', handleCandidate3Click);
      }
    })
  } else {
    Swal.fire({
      title: 'Error',
      text: 'You have already voted.',
      icon: 'error'
    });
  }
}


// Function to update vote counts and log counts and percentages in Firestore
function updateFirestore() {
  // Calculate percentage of votes for each candidate
  const total = count1 + count2 + count3;
  const percent1 = Math.round((count1 / total) * 100);
  const percent2 = Math.round((count2 / total) * 100);
  const percent3 = Math.round((count3 / total) * 100);

  // Increment vote counts and percentages in Firestore
  db.doc('voteCounts').update({
    count1: firebase.firestore.FieldValue.increment(count1),
    count2: firebase.firestore.FieldValue.increment(count2),
    count3: firebase.firestore.FieldValue.increment(count3),
    percent1: percent1,
    percent2: percent2,
    percent3: percent3,
  })
  .then(() => {
    console.log('Vote counts and percentages logged in Firestore');
  })
  .catch((error) => {
    console.error('Error logging vote counts and percentages in Firestore: ', error);
  });
}
