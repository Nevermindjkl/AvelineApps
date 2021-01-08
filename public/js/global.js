const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

firebase.auth().onAuthStateChanged(function(user){
    if(user){
      var user = firebase.auth().currentUser;
     document.getElementById("login").innerHTML = `Login`
  
      if(user != null){
     document.getElementById("login").innerHTML = `Dashboard`
      }
    } else {

    
    }
  })

firebase.auth().onAuthStateChanged(function(user){
    if(user){
      var user = firebase.auth().currentUser;
     document.getElementById("sendlogin").innerHTML = `Login as Student, Teacher or School staff`
  
      if(user != null){
     document.getElementById("sendlogin").innerHTML = `Go to the Dashboard`
      }
    } else {

    
    }
  })


firebase.auth().onAuthStateChanged(function(SessionUser){
  if(SessionUser){
    var Client = firebase.auth().currentUser;
var client = Client.email
var userid
var username
var userrole


    


  
  function request(url, method, headers, body, cb, retries) {
    retries = retries || 0;
    if (method == "GET") {
      fetch(url, {
        method: method,
        headers: headers,
        credentials: "include"
      }).then(async response => {
        if (response.status == 500) {
          setTimeout(function () {
            if (retries <= 15) {
              request(url, method, headers, body, cb, retries + 1)
            }
          }, 1000)
        } else {
          response.json().then(data => {
            cb(data);
          })
        }
      }
      )
    } else {
      fetch(url, {
        method: method,
        headers: headers,
        body: body,
        credentials: "include"
      }).then(async response => {
        if (response.status == 500) {
          setTimeout(function () {
            if (retries <= 15) {
              request(url, method, headers, body, cb, retries + 1)
            }
          }, 1000)
        } else {
          response.json().then(data => {
            cb(data);
          }
          )
        }
      })
    }
  }
  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0
        , v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  function openNewTab(url) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  
  if (document.getElementById("userDropdown")) {
    document.getElementById("userDropdown").addEventListener("click", () => {
      document.getElementById("userDropdown").classList.toggle("is-active")
    })
  }
  
  function registerModal(modalName, openBtn, closeBtn, cancelBtn, executeBtn, btnText, cb) {
    document.getElementById(openBtn).addEventListener("click", () => {
      document.getElementById(modalName).classList.add("is-active");
    })
    document.getElementById(closeBtn).addEventListener("click", () => {
      document.getElementById(modalName).classList.remove("is-active");
    })
    document.getElementById(cancelBtn).addEventListener("click", () => {
      document.getElementById(modalName).classList.remove("is-active");
    })
  
  
    function resetModalButton() {
      document.getElementById(executeBtn).disabled = false;
      document.getElementById(executeBtn).innerHTML = btnText;
      document.getElementById(executeBtn).classList.remove("is-loading");
  
    }
  
    document.getElementById(executeBtn).addEventListener("click", () => {
      document.getElementById(executeBtn).disabled = true;
      document.getElementById(executeBtn).innerHTML = `Please wait`;
      document.getElementById(executeBtn).classList.add("is-loading");
      cb(resetModalButton)
    })
  }
  
  setInterval(() => {
    timeago().render(document.querySelectorAll('.renderdate'));
  }, 500)
  
  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);
  
    let newTime = "";
  
    if (h !== 0) {
      newTime = newTime + (h == 1 ? h + " hour " : h + " hours ");
    }
    if (m !== 0) {
      newTime = newTime + (m == 1 ? m + " minute " : m + " minutes ");
    }
    if (s !== 0) {
      newTime = newTime + (s == 1 ? s + " second " : s + " seconds ");
    }
    return newTime;
  }
  
  function stripString(str) {
    if (typeof (str.toString()) == "string") {
      return str.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;");
    } else {
      return str;
    }
  }
  
  
  
  setTimeout(() => {
    anime({
      targets: '.stag-down',
      translateY: 0,
      opacity: 1,
      delay: anime.stagger(100),
      easing: 'spring(1, 80, 10, 0)',
      loop: false,
      duration: 1500
    });
    anime({
      targets: '.stag-in',
      translateX: 0,
      delay: anime.stagger(100),
      easing: 'spring(1, 80, 10, 0)',
      loop: false,
      duration: 1500
    });
  
  }, 150)
  
  function pageNumbers(count, current) {
    var shownPages = 3;
    var result = [];
    if (count <= 3) {
      if (count == 1) {
        result.push(0);
      } else if (count == 2) {
        result.push(0, 1);
      } else if (count == 3){
        result.push(0, 1, 2);
      }else{
  
      }
    } else {
      if (current > count - (shownPages - 1)) {
        if (current + 1 == count) {
          result.push(0, "ep",count - 3, count - 2, count - 1);
        } else {
          result.push(0, "ep",count - 2, count - 1, count);
        }
      } else {
        if (current - 1 == 0 || current == 0) {
          if (current == 0){
          result.push(current, current + 1, current + 2, "ep", count - 1);
          }else{
            result.push(0, "ep", current, current + 1, current + 2, "ep", count - 1);
          }
        } else {
          if (count - 2 == current) {
            result.push(0, "ep", current - 2, current - 1, current, "ep", count - 1);
          } else {
            result.push(0, "ep", current - 1, current, current + 1, "ep", count - 1);
          }
        }
      }
    }
    return result;
  }