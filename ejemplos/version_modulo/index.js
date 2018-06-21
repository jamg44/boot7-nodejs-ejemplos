'use strict';

const fs = require('fs');
const path = require('path');

function versionModulo(nombreModulo, callback) {
  // calcular la ruta al fichero package.json del modulo
  const fichero = path.join(__dirname, './node_modules', nombreModulo, 'package.json');

  // leer el fichero package.json
  fs.readFile(fichero, 'utf8', (error, datos) => {
    // lo primero que hago enun callback es comprobar el posible error
    // "error first"
    if (error) {
      callback(error);
      return;
    }

    let packageObject;

    try {
      // convertir a objeto el contenido
      packageObject = JSON.parse(datos);
    } catch(err) {
      callback(err);
      return;
    }

    // retornar la versión del modulo
    callback(null, packageObject.version);

  });

}

versionModulo('chance', function(err, str) {
	if (err) {
     console.error('Hubo un error: ', err);
     return;
	}
	console.log('La version del módulo es:', str);
});
