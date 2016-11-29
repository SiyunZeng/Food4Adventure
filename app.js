(function)() {
   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBr6iKw0flJw28mStxf_clP2_ZBIQTORso",
    authDomain: "food4adventure.firebaseapp.com",
    databaseURL: "https://food4adventure.firebaseio.com",
    storageBucket: "food4adventure.appspot.com",
    messagingSenderId: "1047852701386"
  };
  firebase.initializeApp(config);  


//Get Elements
const preObject = document.getElementById('object');

// Create references
const dbRefObject = firebase.database().ref().child('object');

//Sync object changes
dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
});


}());