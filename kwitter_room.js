var firebaseConfig = {
      apiKey: "AIzaSyDCje5JRq2XFbPkENmHT-RnxGG3TvUwIkU",
      authDomain: "kwitter-861a3.firebaseapp.com",
      projectId: "kwitter-861a3",
      storageBucket: "kwitter-861a3.appspot.com",
      messagingSenderId: "789567656698",
      appId: "1:789567656698:web:2ac7bd2956f729a3672f43"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
