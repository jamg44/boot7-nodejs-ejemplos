'use strict';

// función que retorna una promesa
function suma10(algo) {
  return new Promise(function(resolve, reject) {
    resolve(algo + 10); // llamando a resolve() resolvemos la promesa
      //reject(err); // llamando a reject() terminamos la promesa insatisfactoriamente
  });
}

suma10(20)
  .then((dato) => {
    console.log(dato);
    return dato;
  })
  .then(suma10)
  .then((dato) => {
    console.log('el dato aqui es', dato);
    return dato;
  })
  .then(suma10)
  .then((dato) => {
    console.log(dato);
    return dato;
  })