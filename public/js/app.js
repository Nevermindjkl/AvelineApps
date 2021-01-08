var firebase
var axios
var discord

function SessionLogout(){
    firebase.auth().signOut();
}


firebase.auth().onAuthStateChanged(function(Session){
  if(Session){
    var Client = firebase.auth().currentUser
    var Today = new Date();
    var Time = Today.getHours();
    var ClientUID, ClientEmail, Username, UserSyntax, Userid, Userimage, Useroccupation, Userclass

    ClientUID = Client.uid
    ClientEmail = Client.email

    axios.get(`https://avelineapps.firebaseio.com/cloud/api/users/${ClientEmail.split("@")[0]}.json`)
         .then(function (response){
           Username = response.data.username
           UserSyntax = response.data.syntax
           Userid = response.data.userid
           Userimage = response.data.userimage
           Useroccupation = response.data.occupation
           Userclass = response.data.data.class
      
      document.getElementById("ProfilePicture").src = Userimage
      document.getElementById("NavProfilePicture").src = Userimage
      document.getElementById("Useroccupation").innerHTML = `an Aveline ${Useroccupation} (${Username})`

      if (Time < 6 ) {
        document.getElementById("UsernameTitle").innerHTML = `Good Evening, ${UserSyntax}`
        document.getElementById("MobileUsernameTitle").innerHTML = `Good Evening, ${UserSyntax}, Our dashboard doesn't support mobile/tablet features yet! Coming soon..`
      }
      if (Time > 6 ) {
        document.getElementById("UsernameTitle").innerHTML = `Good Morning, ${UserSyntax}`
        document.getElementById("MobileUsernameTitle").innerHTML = `Good Morning, ${UserSyntax}, Our dashboard doesn't support mobile/tablet features yet! Coming soon..`
      }
      if (Time > 12) {
        document.getElementById("UsernameTitle").innerHTML = `Good Afternoon, ${UserSyntax}`
        document.getElementById("MobileUsernameTitle").innerHTML = `Good Afternoon, ${UserSyntax}, Our dashboard doesn't support mobile/tablet features yet! Coming soon..`
      }
      if (Time > 17) {
        document.getElementById("UsernameTitle").innerHTML = `Good Evening, ${UserSyntax}`
        document.getElementById("MobileUsernameTitle").innerHTML = `Good Evening, ${UserSyntax}, Our dashboard doesn't support mobile/tablet features yet! Coming soon..`
      }


    })
    

  } else if(!Session){
    window.location.replace("/")
  }
})