# Responsive emails

Este repositorio contiene un ejemplo sobre cómo enviar emails *responsive* utilizando NodeJS y Sendgrid.

En breve publicaré un post detallado explicando el funcionamiento y forma de uso de éste ejemplo. 


## Pre-requisitos

Lo único que necesitamos es tener instalado:

- [NodeJS y npm](http://nodejs.org/) 

- [Hogan.js](http://twitter.github.io/hogan.js/)

		$ > npm install -s hogan.js

- Tener una cuenta en [Sendgrid](http://sendgrid.com).


**TSD package manage y Visual Studio Code**

Además, de forma opcional, el código de este ejemplo utiliza referencias al módulo *TSD package manage*, con el que podemos utilizar Typescript y disponer de ayuda contextual de las clases y métodos de NodeJS y ExpressJS en el IDE [Visual Studio Code](https://code.visualstudio.com/).

Para instalarlo ejecutamos:

	$ > npm install tsd@next -g
	

> Nota: este apartado es totalmente opcional. En caso de no querer utilizar estas referencias o no estar usando Visual Studio Code, debemos eliminar estas líneas del fichero `app/app.js`:
> 
> 
>   `/// <reference path="../typings/node/node.d.ts"/`
> 
>   `/// <reference path="../typings/express/express.d.ts"/`


## Cómo instalarlo

Para instalar el ejemplo, tenemos que:

- Crear la carpeta donde albergar el proyecto:
	
		$ > cd <root_apps_node>
 
		$ > sudo mkdir ./responsive-emails-service

- Clonar el proyecto del repositorio
	
		$ > cd responsive-emails-service

		$ > git clone https://github.com/koldohernandez/responsive-emails-nodejs-service.git .

- Instalar las dependencias del proyecto

		$ > npm install

*Opcional*: En caso de que tengas instalado *TSD package manager* y quieras utilizar las librerías de definición de Typescript para NodeJS y ExpressJS, debes ejecutar lo siguiente:

	$ > tsd install node

	$ > tsd install express


## Configuración básica

Para configurar el ejemplo, debes repasar los siguientes aspectos:

- Configurar las variables del fichero `env.json`:

	- `host`: puerto por el que quieres que *escuche* la aplicación. Por defecto, el 8082.
	
	- `email.key`: tu clave de uso de la API de Sendgrid.

- Destinatario del mensaje en el fichero `app/app.js`: como esto es un ejemplo, he puesto mi email. Cambia el destinatario `info@koldohernandez.com` por el tuyo.


## Cómo utilizarlo

Para probar este código, sólo tienes que arrancar tu servidor de node:

	$ > cd <root_apps_node>/responsive-emails-service

	$ > node app/app.js


Una vez hecho, sólo tienes que acceder a la URL:

- `http://localhost:8082`: el resultado es un texto de Bienvenida.

- `http://localhost:8082/preview`: como resultado obtienes la vista previa del email que se va a enviar.

- `http://localhost:8082/send`: envía el email al destinatario y muestra un mensaje.