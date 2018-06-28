const basicAuth = require('basic-auth');

// exporto una función que devuelve un middleware
// para autenticar usuarios
module.exports = function(user, pass) {
  return (req, res, next) => {
    // intentar recuperar token de usuario autenticado
    const credentials = basicAuth(req);

    // si no existe token o no es valido
    if (!credentials || credentials.name !== user || credentials.pass !== pass) {
      // pedirle que se autentique
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      res.sendStatus(401);
      return;
    }
    // el usuario me ha dado unas credenciales validas
    next();
  };
}
