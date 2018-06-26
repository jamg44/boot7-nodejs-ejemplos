'use strict';

// función que retorna una promesa
function sleep(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('a'); // llamando a resolve() resolvemos la promesa
      //reject(err); // llamando a reject() terminamos la promesa insatisfactoriamente
    }, ms);
  });
}

// usar la función

const promesa = sleep(2000);

console.log(promesa);

promesa.then((dato) => {
  console.log('La promesa se completó con', dato);
  return sleep(1000);
}).then(dato => {
  console.log('la seguna promesa se completó con', dato);
});

promesa.catch(err => {
  console.log('promesa rechazada', err);
});
