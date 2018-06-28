const express = require('express');
const router = express.Router();

const Agente = require('../../models/Agente');

const basicAuth = require('../../lib/basicAuth');
const jwtAuth = require('../../lib/jwtAuth');

// router.use(basicAuth('admin', '1234')); // para que todo el router pida autenticación

/**
 * GET /
 * Recupera una lista de agentes
 */
router.get('/', jwtAuth(), async (req, res, next) => {
  try {
    // cual es el usuario?
    console.log('el usuario autenticado es:', req.user_id);
    
    const name = req.query.name;
    const age = req.query.age;
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    const fields = req.query.fields;
    const sort = req.query.sort;

    // crear un filtro vacio
    const filter = {};

    if (name) { // solo añado el filtro cuando tengo que filtrar
      filter.name = name;
    }

    if (age) {
      filter.age = age;
    }

    const agentes = await Agente.list(filter, skip, limit, fields, sort); // await espera a se resuelva la promesa y me da el resultado
    res.json({ success: true, result: agentes });
  } catch(err) {
    next(err);    
  }
});

/**
 * POST /
 * Crear un agente
 */
router.post('/', async (req, res, next) => {
  try {

    // creamos un agente en memoria
    const agente = new Agente(req.body);

  // lo guardamos en la base de datos
  // version callback
  // agente.save((err, agenteGuardado) => {
  //   if (err) {
  //     next(err);
  //     return;
  //   }
  //   res.json({ success: true, result: agenteGuardado });
  // });
  
  // version promesa
  // agente.save().then(agenteGuardado => {
  //   res.json({ success: true, result: agenteGuardado });
  // }).catch(next);
  
    // version async/await
    const agenteGuardado = await agente.save();
    res.json({ success: true, result: agenteGuardado });
  } catch(err) {
    next(err);
  }
});

/**
 * PUT /
 * Actualiza un agente
 */
router.put('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;
    const data = req.body;

    const agenteModificado = await Agente.findOneAndUpdate({ _id: _id }, data, { new: true }).exec();
    res.json({ success: true, result: agenteModificado });

  } catch(err) {
    next(err);
  }
});

module.exports = router;
