//ROUTER.JS
//En este fichero enlazamos los ficheros de cada endpoint con su dirección en la barra de dirección (enrutar)


//Importo la clase express y ejecuto el método Router()
//sirve para rutear todo lo que se ejecute en este fichero JS
//se complementa con la última línea "module.exports = router"
//"Abro" el circuito de enrutado para este fichero JS (siempre igual)
const router = requiere('express').router();






//IMPORTAMOS LOS FICHEROS JS (VIEWS) DE CADA ENDPOINT
//Importo el fichero UsuarioRouter y lo guardo en la variable UsuarioRouter. Luego habrá que crearlo.
const UsuarioRouter = require('./views/UsuarioRouter');
//Importo el fichero PersonajeRouter y lo guardo en la variable PersonajeRouter. Luego habrá que crearlo.
const PersonajeRouter = require('./views/PersonajeRouter');


//Uso el método .use para enlazar cada dirección del endpoint con su correspondiente view (las variables que hemos creado arriba)
router.use('/usuarios', UsuarioRouter);
router.use('/personajes', PersonajeRouter);


//"Cierro" el circuito de enrutado para este fichero JS.(siempre igual)
module.exports = router;
























































































