/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/express/express.d.ts"/>


//  MÓDULOS NECESARIOS
// --------------------
var app = require('express')();
var path = require('path');
var hogan = require('hogan.js');
var fs = require('fs');

// Configuración de la aplicación
var conf = require('./config').config();

// Sendgrid
var sendgrid  = require('sendgrid')(conf.email.key);




//  SETTINGS
// ----------
// hogan js templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// obtener la plantilla de email
var template = fs.readFileSync('./app/views/email.hjs','utf-8');

// compilar la plantilla email
var compiledTemplate = hogan.compile(template);



//  RUTAS
// -------
// Home
app.get("/", function(req, res) {
  
  res.render('index');
  
});
  
// Enviar email
app.get('/send', function(req, res) {
  
  /* 
    NOTA: PON EL DESTINATATIO DEL EMAIL AQUI
  */
  var  receiver = 'info@koldohernandez.com';
  
  var mailConfig = {
    to:       receiver,
    from:     conf.email.from,
    subject:  'Hola!',
    html:     compiledTemplate.render({firstName: 'Koldo'})
  };
  
  sendgrid.send(mailConfig, function(err, json) {
    
    var titulo = 'Email enviado correctamente';
    var texto = 'El email se ha enviado a la siguiente dirección: ' + receiver;
    
    if (err) {
      titulo = 'Se ha producido un error';
      texto = err;
    }
    
    res.render('page', {titulo: titulo, texto: texto});
    
  });
  
});


// Preview
app.get('/preview', function(req, res) {
  res.render('email', {firstName: 'Koldo'});
});




//  ARRANCAR EL SERVER
// --------------------
// Escuchar en el puerto configurado
app.listen(conf.port);

// Log para saber cuando se arranca el servidor
console.log('App escuchando en el puerto: ' + conf.port);
