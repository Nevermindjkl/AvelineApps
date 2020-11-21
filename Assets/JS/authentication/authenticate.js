const Database = firebase.database();

firebase.auth().onAuthStateChanged(function(user){
    if(user){
      var user = firebase.auth().currentUser;
      window.location.replace("index.html")
  
      if(user != null){
          window.location.replace("/dashboard.html")
      }
    } else {
        
    
    }
  })

  
function sessionlogin(){
    var UserEmail = document.getElementById("email").value;
    var UserPassword = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(UserEmail, UserPassword).catch(function(Error) {
       var ErrorCode = Error.code
       var ErrorMessage = Error.message
  
       Swal.fire(
        'Oops!',
        ErrorMessage,
        'error'
      )
  });
}