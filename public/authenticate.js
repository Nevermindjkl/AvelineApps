const Database = firebase.database();

firebase.auth().onAuthStateChanged(function(user){
    if(user){
      var user = firebase.auth().currentUser;
      window.location.replace("/")
  
      if(user != null){
          window.location.replace("/app")
      }
    } else {
        Swal.fire({
        title: 'Welcome back!',
        text: "Login with your Aveline credentials.",
        icon: 'info',
        confirmButtonText: 'Okay'
    })
    
    }
  })


function logout(){
    firebase.auth().signOut();
}
  
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