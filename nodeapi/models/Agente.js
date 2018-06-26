'use strict';

const mongoose = require('mongoose');

// primero definimos un esquema
const agenteSchema = mongoose.Schema({
  name: String,
  age: Number
});

// creamos el modelo
const Agente = mongoose.model('Agente', agenteSchema);

module.exports = Agente;
