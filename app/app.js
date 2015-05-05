/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/express/express.d.ts"/>

var express = require('express');
var app = express();
var conf = require('./config').config();

var sendgrid  = require('sendgrid')(conf.email.key);


// Home
app.get("/", function(req, res) {
	res.send("Bienvenido a mi página");
});
  
// Enviar email
app.get('/send', function(req, res) {
  
  var opcionesMail = {
    to:       'info@koldohernandez.com',
    from:     conf.email.from,
    subject:  'Hola!',
    text:     'Este es mi primer email desde SendGrid.'
  };
  
  sendgrid.send(opcionesMail, function(err, json) {
    if (err) { return console.error(err); }
    console.log(json);
    
    res.send("Email enviado correctamente");
  });
  
});


//  ARRANCAR EL SERVER
// --------------------
// Escuchar en el puerto configurado
app.listen(conf.port);

// Log para saber cuando se arranca el servidor
console.log('App escuchando en el puerto: ' + conf.port);
