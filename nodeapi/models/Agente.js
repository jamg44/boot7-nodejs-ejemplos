'use strict';

const mongoose = require('mongoose');

// primero definimos un esquema
const agenteSchema = mongoose.Schema({
  name: String,
  age: Number
//}, { collection: 'Agente'});
});

// creamos el modelo
const Agente = mongoose.model('Agente', agenteSchema);

module.exports = Agente;
