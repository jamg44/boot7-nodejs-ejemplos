'use strict';

// constructor de objetos
function Coche(ruedas) {
  this.ruedas = ruedas;

  this.cuantasRuedas = function() {
    console.log('tiene', this.ruedas, 'ruedas');
  }

}

const todoterreno = new Coche(4);

// donde hagamos la invocación del método, el objeto a la izquierda del '.' será el this dentro del método
todoterreno.cuantasRuedas();

const pintaRuedas = todoterreno.cuantasRuedas.bind(todoterreno);

pintaRuedas();

setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000);

// ejecutar método con un this distinto
todoterreno.cuantasRuedas.call({ ruedas: 16 });
