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
      
      document.getElementById("NavProfilePicture").src = Userimage


    })
    

    
    
 

    

  } else if(!Session){
    window.location.replace("/")
  }
})