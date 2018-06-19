'use strict';

console.log('empiezo');

// funcion que escriba un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callback) {
  setTimeout(function() {
    console.log(texto);
    callback();
  }, 2000);
}

// bucle asíncrono en serie
// llamar a una función n veces en serie
function serie(n, fn, callbackFinalizacion) {
  if (n === 0) {
    callbackFinalizacion();
    return;
  }
  n = n - 1; // n--;
  fn('texto' + n, function() {
    serie(n, fn, callbackFinalizacion);
  });
}

serie(5, escribeTras2Segundos, function() {
  console.log('fin');
});
