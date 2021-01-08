var Background = require('fcc-express-bground');
var Router = require('./router.js');
var Express = require('express');

var App = Express();
var Port = process.env.PORT || 3000


Background.setupBackgroundApp(App, Router, __dirname).listen(Port, function(){
  Background.log('Node is listening on port '+ Port + '...')
});