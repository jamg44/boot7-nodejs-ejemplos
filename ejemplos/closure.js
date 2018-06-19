'use strict';

// patron factory
function creaAgente(nombre) {
  return {
    getNombre: function() {
      return nombre;
    },
    saluda: function() {
      console.log('Hola soy', nombre);
    }
  }
}

const jones = creaAgente('Jones');
console.log(jones);
setTimeout(jones.saluda, 2000);
