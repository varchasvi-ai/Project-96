//YOUR FIRE BASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDK7UZQbFrhiVu6eRUKBQ2sV9l4t3ZzDAM",
      authDomain: "kwitter-189ae.firebaseapp.com",
      databaseURL: "https://kwitter-189ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-189ae",
      storageBucket: "kwitter-189ae.appspot.com",
      messagingSenderId: "745681927473",
      appId: "1:745681927473:web:40544d41215d54a309c410"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    
          user_name = localStorage.getItem("user_name");
          room_name = localStorage.getItem("room_name");
    
    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
       });
    
      document.getElementById("msg").value = "";
    }
    
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
             firebase_message_id = childKey;
             message_data = childData;
    //Start code
    //End code
          } });  }); }
    getData();
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }
    