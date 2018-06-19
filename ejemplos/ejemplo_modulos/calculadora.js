'use strict';

// podría inicializar cosas de mi modulo
console.log('inicializo calculadora');

// quien carge este módulo obtendrá lo que hay en exports
module.exports.suma = (a, b) => {
  return a + b;
};

module.exports.resta = (a, b) => {
  return a - b;
}