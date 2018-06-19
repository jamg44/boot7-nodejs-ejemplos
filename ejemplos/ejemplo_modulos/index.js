'use strict';

const calculadora = require('./calculadora');

console.log(calculadora.resta(2, 5));

calculadora.metodoNuevo = 'loquesea';

const calculadora2 = require('./calculadora');

console.log(calculadora2.metodoNuevo);
