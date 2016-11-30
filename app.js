


 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBr6iKw0flJw28mStxf_clP2_ZBIQTORso",
    authDomain: "food4adventure.firebaseapp.com",
    databaseURL: "https://food4adventure.firebaseio.com",
    storageBucket: "food4adventure.appspot.com",
    messagingSenderId: "1047852701386"
  };
  firebase.initializeApp(config);

  var bigOne = document.getElementById('bigOne');
  var dbRef = firebase.database().ref().child('users');
  var dbRef2 = firebase.database().ref().child('calories');
  
dbRef2.on('value', snap => calories.innerText = snap.val());