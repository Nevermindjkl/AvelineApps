// Please do not copy our code :( I have worked very long on this :(




    const Database = firebase.database(); 

    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        var user = firebase.auth().currentUser;
        window.location.replace("/index.html")
    
        if(user != null){
            window.location.replace("/dashboard.html")
        }
      } else {
          
      
      }
    })

    














document.getElementById("createTeamBTN").addEventListener("click", () => {
    document.getElementById("createTeamModal").classList.add("is-active");
})
document.getElementById("closeTeamModal").addEventListener("click", () => {
    document.getElementById("createTeamModal").classList.remove("is-active");
})
document.getElementById("cancelTeamModal").addEventListener("click", () => {
    document.getElementById("createTeamModal").classList.remove("is-active");
})

const nameTeamModal = document.getElementById("nameTeamModal");
const descriptionTeamModal = document.getElementById("descriptionTeamModal");
const groupTeamModal = document.getElementById("groupTeamModal");

function resetModalButton(){
    document.getElementById("createTeamModalButton").disabled=false;
    document.getElementById("createTeamModalButton").innerHTML=`Create Team`;
    document.getElementById("createTeamModalButton").classList.remove("is-loading");

}

document.getElementById("createTeamModalButton").addEventListener("click", () => {
    document.getElementById("createTeamModalButton").disabled=true;
    document.getElementById("createTeamModalButton").innerHTML=`Please wait`;
    document.getElementById("createTeamModalButton").classList.add("is-loading");

    if (nameTeamModal.value.length >= 1){
        if (descriptionTeamModal.value.length >= 1){
            if (groupTeamModal.value.length >= 1){
                const teamName = nameTeamModal.value;
                const teamDesc = descriptionTeamModal.value;
                const teamGroup = groupTeamModal.value;

                grecaptcha.execute(recaptcha, { action: 'create_team' }).then(function (token) {
                    request(api+"/teams", "POST", {"Content-Type": "application/json"}, JSON.stringify({
                        name: teamName,
                        desc: teamDesc,
                        group: teamGroup,
                        token: token
                    }), (data) => {
                        if (data.success){
                            window.location.reload();
                        }else{
                            Toast.fire({
                                icon: "error",
                                title: "Something went wrong",
                                text: data.reason
                            })
                            resetModalButton()
                        }
                    })
                })
            }else{
                Toast.fire({
                    icon: "error",
                    title: "You must enter a group for your team"
                })
                resetModalButton()
            }
        }else{
            Toast.fire({
                icon: "error",
                title: "You must enter a description for your team"
            })
            resetModalButton()
        }
    }else{
        Toast.fire({
            icon: "error",
            title: "You must enter a name for your team"
        })
        resetModalButton()
    }
})