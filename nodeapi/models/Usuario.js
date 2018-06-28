'use strict';

const mongoose = require('mongoose');

// primero definimos un esquema
const usuarioSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: String
});

// creamos el modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
