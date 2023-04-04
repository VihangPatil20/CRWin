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
  alert("Here are the results!")

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

    // Update the HTML elements with the individual count values for all three classes
    const count1Displays = document.querySelectorAll("#count1");
    count1Displays.forEach((display, index) => {
      display.innerHTML = ` ${voteCounts[index].count1}`;
      
    });

    const count2Displays = document.querySelectorAll("#count2");
    count2Displays.forEach((display, index) => {
      display.innerHTML = ` ${voteCounts[index].count2}`;
    });

    const count3Displays = document.querySelectorAll("#count3");
    count3Displays.forEach((display, index) => {
      display.innerHTML = ` ${voteCounts[index].count3}`;
    });
  })
  .catch((error) => {
    console.log("Error getting documents:", error);
  });




}
