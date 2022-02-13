//Importo la clase express en y la guardo en la variable express (siempre igual)
const express = require('express');
//"Abro" el circuito de enrutado para este fichero JS (siempre igual)
const router = express.Router();




//Importo el fichero UsuarioController y lo guardo en la variable UsuarioController. Luego habrá que crearlo.
const UsuarioController = require('../controllers/UsuarioController');




//Enlazo método(CRUD), endpoint y función.
//http://localhost:3000/usuarios  (usando un get).
router.get('/', UsuarioController.getAll);
//http://localhost:3000/usuarios (usando un post).
router.post('/', UsuarioController.postAll);
//http://localhost:3000/usuarios/login
router.post('/login', UsuarioController.userLogin);











//"Cierro" el circuito de enrutado para este fichero JS.(siempre igual)
module.exports = router;