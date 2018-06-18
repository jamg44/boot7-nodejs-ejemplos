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
// llamar a una función en serie copn cada elemento de un array
function serie(arr, fn, callbackFinalizacion) {
  if (arr.length == 0) {
    callbackFinalizacion();
    return;
  }
  fn('texto' + arr.shift(), function() {
    serie(arr, fn, callbackFinalizacion);
  });
}

serie([1, 2, 'tres', 4, 5], escribeTras2Segundos, function() {
  console.log('fin');
});
