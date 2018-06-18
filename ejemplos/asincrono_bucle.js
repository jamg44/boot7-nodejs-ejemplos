'use strict';

console.log('empiezo');

// funcion que escriba un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callback) {
  setTimeout(function() {
    console.log(texto);
    callback();
  }, 2000);
}

// hacemos bucle y se ejecuta en paralelo
for (let i = 0; i <= 50; i++) {
  escribeTras2Segundos('texto' + i, function() {
    console.log('termino');
  });
}

