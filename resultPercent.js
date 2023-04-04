

const firebaseConfig = {
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

function result() {
  //show alert
  swal.fire("Here are the Results!");


  // Read the voteCounts documents in the voting collections for all three classes
const promises = [
  firebase.firestore().collection("voting A").doc("voteCounts").get(),
  firebase.firestore().collection("voting B").doc("voteCounts").get(),
  firebase.firestore().collection("voting C").doc("voteCounts").get(),
];

Promise.all(promises)
  .then((docs) => {
    // Get the voteCounts from all three documents
    const voteCounts = docs.map((doc) => doc.data());

    // Calculate the percentage for all three classes and candidates
    const totalVotes1 = voteCounts.reduce((sum, count) => sum + count.count1, 0);
    const totalVotes2 = voteCounts.reduce((sum, count) => sum + count.count2, 0);
    const totalVotes3 = voteCounts.reduce((sum, count) => sum + count.count3, 0);

    const percent1 = voteCounts.map((count) => (count.count1 / totalVotes1) * 100);
    const percent2 = voteCounts.map((count) => (count.count2 / totalVotes2) * 100);
    const percent3 = voteCounts.map((count) => (count.count3 / totalVotes3) * 100);

    // Update the HTML elements with the percentage values for all three classes
    const percent1Displays = document.querySelectorAll("#percent1A, #percent1B, #percent1C");
    percent1Displays.forEach((display, index) => {
      display.innerHTML = `${percent1[index].toFixed(2)}%`;
    });

    const percent2Displays = document.querySelectorAll("#percent2A, #percent2B, #percent2C");
    percent2Displays.forEach((display, index) => {
      display.innerHTML = `${percent2[index].toFixed(2)}%`;
    });

    const percent3Displays = document.querySelectorAll("#percent3A, #percent3B, #percent3C");
    percent3Displays.forEach((display, index) => {
      display.innerHTML = `${percent3[index].toFixed(2)}%`;
    });

    // Update the HTML elements with the vote counts for all three classes
    const count1Displays = document.querySelectorAll("#count1A, #count1B, #count1C");
    count1Displays.forEach((display, index) => {
      display.innerHTML = voteCounts[index].count1;
    });

    const count2Displays = document.querySelectorAll("#count2A, #count2B, #count2C");
    count2Displays.forEach((display, index) => {
      display.innerHTML = voteCounts[index].count2;
    });

    const count3Displays = document.querySelectorAll("#count3A, #count3B, #count3C");
    count3Displays.forEach((display, index) => {
      display.innerHTML = voteCounts[index].count3;
    });
  })
  .catch((error) => {
    console.log("Error getting documents:", error);
  });
}