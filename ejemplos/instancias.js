'use strict';

// crear una función para usarla como constructor de objetos
function Fruta(nombre) {
  // this representa al objeto que estamos creando
  this.nombre = nombre;
  this.setNombre = function(valor) {
    this.nombre = valor;
  }
}

// crear un objeto con la función constructora
const limon = new Fruta('soy limon');
limon.setNombre('naranja');
console.log(limon);
