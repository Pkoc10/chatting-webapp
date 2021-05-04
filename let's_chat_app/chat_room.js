// ADD YOUR FIREBASE LINLKS 
var firebaseConfig = {
    apiKey: "AIzaSyA3DguXcMX_upGb2KJTUacRGW-KctfcCHo",
    authDomain: "pratham-s-bot-vpwv.firebaseapp.com",
    databaseURL: "https://pratham-s-bot-vpwv-default-rtdb.firebaseio.com",
    projectId: "pratham-s-bot-vpwv",
    storageBucket: "pratham-s-bot-vpwv.appspot.com",
    messagingSenderId: "511433615183",
    appId: "1:511433615183:web:60488b1b1540d8e7c8873a",
    measurementId: "G-R587QPZGPV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "chatting_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey  =childSnapshot.key;
     Room_names = childKey;
     console.log("Room name - " + Room_names);
     row = "<div class='room_name' id=" + Room_names +" onclick ='redirectToRoom(this.id)'> #" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
    });
  });
}

getData();

function redirectToRoom(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chatting_page.html";
} 

function logOut()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

