const firebaseConfig = {
    apiKey: "AIzaSyDTGTNXn5BKQTKEQKG0bx6KwJZ2NGw7pUc",
    authDomain: "crwin-db.firebaseapp.com",
    databaseURL: "https://crwin-db-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "crwin-db",
    storageBucket: "crwin-db.appspot.com",
    messagingSenderId: "360870367139",
    appId: "1:360870367139:web:c9f5a0867c920c38049416"
  };
  
  firebase.initializeApp(firebaseConfig);

  // Get references to the Firestore collections
  const votingACollection = firebase.firestore().collection('voting A');
  const votingBCollection = firebase.firestore().collection('voting B');
  const votingCCollection = firebase.firestore().collection('voting C');

  // Get references to the HTML elements
  const registeredVotersEl = document.getElementById('registeredVoters');
  const votesCastEl = document.getElementById('votesCast');
  const voterTurnoutEl = document.getElementById('voterTurnout');
  const classAEl = document.getElementById('classA');
  const classBEl = document.getElementById('classB');
  const classCEl = document.getElementById('classC');

  // Function to calculate the percentage of registered voters who have cast their vote
  function calculateVoterTurnout(registered, cast) {
    if (registered === 0) {
      return '0%';
    } else {
      return Math.round((cast / registered) * 100) + '%';
    }
  }

  // Function to display the analysis
function showAnalysis() {
    // Get the total number of registered voters
    votingACollection.get().then((snapshot) => {
      const votingATotal = snapshot.size;
      votingBCollection.get().then((snapshot) => {
        const votingBTotal = snapshot.size;
        votingCCollection.get().then((snapshot) => {
          const votingCTotal = snapshot.size;
  
          // Display the total number of registered voters
          const registeredVotersTotal = votingATotal + votingBTotal + votingCTotal;
          registeredVotersEl.textContent = registeredVotersTotal;
  
          // Get the total number of votes cast so far
          votingACollection.where('voted', '==', true).get().then((snapshot) => {
            const votingAVotesCast = snapshot.size;
            votingBCollection.where('voted', '==', true).get().then((snapshot) => {
              const votingBVotesCast = snapshot.size;
              votingCCollection.where('voted', '==', true).get().then((snapshot) => {
                const votingCVotesCast = snapshot.size;
  
                // Display the total number of votes cast so far
                const votesCastTotal = votingAVotesCast + votingBVotesCast + votingCVotesCast;
                votesCastEl.textContent = votesCastTotal;
  
                // Calculate and display the percentage of registered voters who have cast their vote
                const voterTurnoutPercentage = calculateVoterTurnout(registeredVotersTotal, votesCastTotal);
                voterTurnoutEl.textContent = voterTurnoutPercentage;
  
                // Get the vote count for each class
                votingACollection.where('voted', '==', true).get().then((snapshot) => {
                  const votingACount = snapshot.size;
                  votingBCollection.where('voted', '==', true).get().then((snapshot) => {
                    const votingBCount = snapshot.size;
                    votingCCollection.where('voted', '==', true).get().then((snapshot) => {
                      const votingCCount = snapshot.size;
  
                      // Display the vote count for each class
                      classAEl.textContent = `Class A: ${votingACount}`;
                      classBEl.textContent = `Class B: ${votingBCount}`;
                      classCEl.textContent = `Class C: ${votingCCount}`;
  
                      // Show the analysis container
                      document.querySelector('.class-results').style.display = 'block';
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  
  // Add event listener to the "Show Analysis" button
  document.querySelector('a[onclick="showAnalysis()"]').addEventListener('click', (event) => {
    event.preventDefault();
    showAnalysis();
  });
  