const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  next(new Error('fatal de la muerte'));
});

module.exports = router;
