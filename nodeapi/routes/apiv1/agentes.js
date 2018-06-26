const express = require('express');
const router = express.Router();

const Agente = require('../../models/Agente');

/**
 * GET /
 * Recupera una lista de agentes
 */
router.get('/', (req, res, next) => {
  Agente.find({}).exec((err, agentes) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ success: true, result: agentes });
  });
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
