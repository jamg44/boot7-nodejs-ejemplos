var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/paramenruta/:dato?', (req, res, next) => {
  console.log('req.params', req.params);
  res.send('ok recibido el dato: ' + req.params.dato);
});

router.get('/param/:id([0-9]+)/piso/:piso/puerta/:puerta(A|B|C)', (req, res, next) => {
  console.log('req.params', req.params);
  res.send('ok recibidos datos: ' + JSON.stringify(req.params));
});

router.get('/enquerystring', (req, res, next) => {
  console.log('req.query', req.query);
  res.send('ok');
});

router.post('/enelbody', (req, res, next) => {
  console.log('req.body', req.body);
  res.send('ok');
});

module.exports = router;
