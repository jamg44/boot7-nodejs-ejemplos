'use strict';

// definimos una función constructora de objetos
function Persona(nombre) {
  this.nombre = nombre;
}

// construir un objeto
const luis = new Persona('Luis');

// añadir propiedades al prototipo de las personas
Persona.prototype.saluda = function() {
  console.log('Hola, me llamo', this.nombre);
}

// Ahora todas las persona creadas y las nuevas que se creen tendrán acceso al método saluda
luis.saluda();

// Herencia de persona --------------------------

function Agente(nombre) {
  // heredar el constructor de personas
  Persona.call(this, nombre); // ejecuto el constructor de personas con mi this y le paso el nombre
}

// heredar sus propiedades y métodos
Agente.prototype = new Persona('soy un prototipo');

const smith = new Agente('Smith');

smith.saluda();

console.log( smith instanceof Agente,
             smith instanceof Persona,
             smith instanceof Object );

// Herencia múltiple -------------------------------

// Patrón mixin
function Superheroe() {
  this.vuela = function() {
    console.log(this.nombre, 'vuela');
  };
  this.esquivaBalas = function() {
    console.log(this.nombre, 'esquiva balas');
  }
}

// copiamos todas las propiedades de Superheroe al prototipo de Agente
Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
smith.esquivaBalas();
