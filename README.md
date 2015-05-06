# Responsive emails

Este repositorio contiene un ejemplo sobre cómo enviar emails *responsive* utilizando NodeJS y Sendgrid.

En breve publicaré un post detallado explicando el funcionamiento y forma de uso de éste ejemplo. 

> NOTA IMPORTANTE: este repositorio se encuentra en fase de desarrollo por lo que de momento no es la versión definitiva del mismo.

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

, para obtener las librerías de definición de datos de NodeJS y ExpressJS ejecutamos:

	$ > tsd install node

	$ > tsd install express
	

> Nota: este apartado es totalmente opcional. En caso de no querer utiliar estas referencias o no estar usando Visual Studio Code, debemos eliminar estas líneas del fichero `app/app.js`:
> 
> 
> `/// <reference path="../typings/node/node.d.ts"/`
> `/// <reference path="../typings/express/express.d.ts"/`


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

En caso de que tengas instalado *TSD package manager*, debes 


## Cómo utilizarlo

Para probar este código, sólo tienes que:

- Arrancar tu servidor de node

	$ > cd <root_apps_node>/responsive-emails-service

	$ > node app/app.js

