# Prueba tecnica Meli

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

MeliApp es una aplicacion que consume la api de mercado libre y muestra la lista de productos con su descripcion, las tecnologias usadas son:

- React -vite
- Express - nestjs


## Installation

MeliAPP requiere de  [Node.js](https://nodejs.org/) v18 para correr el proyecto.

Instalar las dependecias y correr el proyecto de manera manual.

```sh
#Instalar dependencias del cliente
cd client
npm install
npm run build
#Volver a la carpeta raiz
cd ..
#Instalar dependencias del servidor
cd server
npm install
npm run build
node dist/main.js
```

Ejecucion utilizando [Docker](https://www.docker.com/)

```sh
docker build -t appmelicontainer .
docker run -d -p 4000:4000 --name appmeli appmelicontainer
```

