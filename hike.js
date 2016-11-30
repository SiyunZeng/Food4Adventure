// Initialize Firebase
var config = {
    apiKey: "AIzaSyBr6iKw0flJw28mStxf_clP2_ZBIQTORso",
    authDomain: "food4adventure.firebaseapp.com",
    databaseURL: "https://food4adventure.firebaseio.com",
    storageBucket: "food4adventure.appspot.com",
    messagingSenderId: "1047852701386"
  };
  firebase.initializeApp(config);

// Navigation Bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// User selects hike or adventure from a set of radial? buttons - calories are displayed
function comox() {
    alert("You need 4000 calories for this hike!");
}
function albert() {
    alert("You need 3500 calories for this hike!");
}
function kludahk() {
    alert("You need 4500 calories for this hike!");
}
function westcoast() {
    alert("You need 6000 calories for this hike!");
}
function juandefuca() {
    alert("You need 5000 calories for this hike!");
}


 

// var bigOne = document.getElementById('bigOne');
//  var dbRef = firebase.database().ref().child('text');
//    dbRef.on('value', snap => bigOne.innerText = snap.val());


 // Get Elements
const preObject = document.getElementById('object');
 //create reference
const dbRefObject = firebase.database().ref().child('object');

//sync object changes
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
}); 




