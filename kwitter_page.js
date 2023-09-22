function send()
{
    msg = document.getElementById("msg").value
    firebase.database().ref(room_name).push({ 
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
} 
var firebaseConfig = {
    apiKey: "AIzaSyBwtZptmbqPjYGT8u7Evq2Dzhiyz0cYUgc",
    authDomain: "kwitter-f5bf2.firebaseapp.com",
    databaseURL: "https://kwitter-f5bf2-default-rtdb.firebaseio.com",
    projectId: "kwitter-f5bf2",
    storageBucket: "kwitter-f5bf2.appspot.com",
    messagingSenderId: "602460006537",
    appId: "1:602460006537:web:95baf7e61f3c4f2182fe58"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
 name = message_data['name'];
 like = message_data[like];
 message = message_data['message']
 name_with_tag = "<h4>"+ name +"<img class='message_h4'>"+ message +"<h4>";
 message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
 like_button ="<button class'btn btn-warning' id=" +firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
 span_with_tag = "<span class='glypicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

 row = name_with_tag + message_with_tag + span_with_tag;
 document.getElementById("output").innerHTML += row;

//End code
 } });  }); }
getData();

function updateLike(message_id)
{
    console.log("clicked on like button -" message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });

}