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

function predict(){



// Read the accuracy and winner fields from the WINNER document in the AIML collection
firebase.firestore().collection("AIML").doc("WINNER").get()
  .then((doc) => {
    if (doc.exists) {
      const accuracy = doc.data().accuracy;
      const winner = doc.data().winner;

      // Update the HTML element with the predicted result
      const predictedResult = document.getElementById("predicted-result");
      predictedResult.innerHTML = `The predicted winner is ${winner} with an accuracy of ${accuracy}.`;
    } else {
      console.log("No such document!");
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
  });

}