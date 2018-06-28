'use strict';

const mongoose = require('mongoose');

// primero definimos un esquema
const agenteSchema = mongoose.Schema({
  name: String,
  age: Number
//}, { collection: 'Agente'});
});

// método estático (lo tiene el modelo, no las instancias)
agenteSchema.statics.list = function(filter, skip, limit, fields, sort) {
  // crear la query sin ejecutarla
  const query = Agente.find(filter);
  query.skip(skip);
  query.limit(limit);
  query.select(fields);
  query.sort(sort); // la ordenación se ejecuta antes que el paginado

  // ejecutamos la query y devolvemos una promesa
  return query.exec();
}

// creamos el modelo
const Agente = mongoose.model('Agente', agenteSchema);

module.exports = Agente;
