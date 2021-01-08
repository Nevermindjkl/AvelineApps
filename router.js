var Express = require('express');
var Axios = require('axios')
var App = Express();
var cors = require('cors')

const BodyParser = require('body-parser');




App.use(BodyParser.urlencoded({extended: false}));
App.use(BodyParser.json()); 




App.get('/', (Request, Response) => {
  Response.sendFile( __dirname + '/views/index.html');
});

App.get('/login', (Request, Response) => {
  Response.sendFile( __dirname + '/views/authenticate/login.html');
});

App.get('/app', (Request, Response) => {
  Response.sendFile( __dirname + '/views/dashboard/home.html');
});

App.get('/app/live', (Request, Response) => {
  window.location.replace("https://scholendavinci.smartschool.be/live/overview")
});

App.get('/app/applications', (Request, Response) => {
  Response.sendFile( __dirname + '/views/dashboard/apps/applications.html');
});

App.get('/app/applications/personel', (Request, Response) => {
  Response.sendFile( __dirname + '/views/dashboard/apps/personel/personel.html');
});

App.get('/apps', (Request, Response) => {
  Response.sendFile( __dirname + '/views/dashboard/apps/personel/personel.html');
});

App.get('/api/v1/classrooms/user/:username', (Request, Response) => {
  Axios.get(`https://avelineapps.firebaseio.com/cloud/api/users/${Request.params.username}.json`)
         .then(function (response){
    if(response.data == null){
      Response.send(`Coulnd't find that user in classrooms database!`)
    }
       Response.send(response.data)
    })
});

App.get('/api/v1/user/:userid', (Request, Response) => {
  Axios.get(`https://avelineapps.firebaseio.com/cloud/servers/discord/users/${Request.params.userid}.json`)
         .then(function (response){
    if(response.data == null){
      Response.send(`Coulnd't find that user in database!`)
    }
       Response.send(response.data)
    })
});


App.use(Express.static( __dirname+ '/public/'));





 module.exports = App;
