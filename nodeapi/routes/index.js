var express = require('express');
var router = express.Router();

const { query, validationResult } = require('express-validator/check');
/** Object destructuring. Lo de arriba es equivalente a: 
const expressValidator = require('express-validator');
const query = expressValidator.query;
const validationResult = expressValidator.validationResult;
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  const segundo = (new Date()).getSeconds();

  // intento de inyección de código
  res.locals.apellido = '<script>alert("inyectado");</script>';

  res.locals.condicion = {
    segundo: segundo,
    estado: segundo % 2 === 0
  };

  res.locals.users = [
    { name: 'Smith', age: 27},
    { name: 'Thomas', age: 40}
  ];

  res.render('index'); //, { title: 'Express' });
});

router.get('/paramenruta/:dato?', (req, res, next) => {
  console.log('req.params', req.params);
  res.send('ok recibido el dato: ' + req.params.dato);
});

router.get('/param/:id([0-9]+)/piso/:piso/puerta/:puerta(A|B|C)', (req, res, next) => {
  console.log('req.params', req.params);
  res.send('ok recibidos datos: ' + JSON.stringify(req.params));
});

router.get('/enquerystring', [
  query('age').isNumeric().withMessage('must be numeric'),
  //query('color').isNumeric().withMessage('must be numeric'),
], (req, res, next) => {
  validationResult(req).throw();
  console.log('req.query', req.query);
  res.json({ success: true, result: 'ok'});
});

router.post('/enelbody', (req, res, next) => {
  console.log('req.body', req.body);
  res.send('ok');
});

module.exports = router;
