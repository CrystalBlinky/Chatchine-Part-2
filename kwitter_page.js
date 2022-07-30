//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDNqNpziZAt4C91Fd9HSTVJ9yrxwXTFeCA",
      authDomain: "kwitter-database-5ab9f.firebaseapp.com",
      databaseURL: "https://kwitter-database-5ab9f-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-5ab9f",
      storageBucket: "kwitter-database-5ab9f.appspot.com",
      messagingSenderId: "47943306919",
      appId: "1:47943306919:web:3a338ef36e8f4c0b581582"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name")
console.log(username)
document.getElementById("user_name").innerHTML = "Welcome " +username;

room_name = localStorage.getItem("room_name");
username = localStorage.getItem("user_name")
console.log(room_name);
console.log(username);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            likes:0
      });

      document.getElementById("msg").value="";
}