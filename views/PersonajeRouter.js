//Importo la clase express en y la guardo en la variable express (siempre igual)
const express = require('express');
//"Abro" el circuito de enrutado para este fichero JS (siempre igual)
const router = express.Router();






//Importo el fichero PersonajeController y lo guardo en la variable PersonajeController. Luego habrá que crearlo.
const PersonajeController = require('../controllers/PersonajeController');





//Enlazo método(CRUD), endpoint y función.
//En este caso cuando desde un front o desde postman nos hagan un get a la dirección
//http://localhost:3000/personajes (router.js línea25)
//Ejecutaremos la función getAll declarada en PersonajeController
router.get('/', PersonajeController.getAll);


//Podemos repetir endpoint si el método es diferente. Usando el mismo endpoint pero uno con get y otro con post por ejemplo
//Pero si necesitamos repetir método, sí que tendremos necesariamente que añadir un endpoint nuevo. 
//PEj. Si quieremos ejecutar una función que se llame "getCapitulos" el ejemplo sería:
//router.get('/capitulos', PersonajeController.getCapitulos);
//Para hacer este get desde axios nos tendrían que apuntar a:
//http://localhost:3000/personajes/capitulos











//"Cierro" el circuito de enrutado para este fichero JS.(siempre igual)
module.exports = router;








































































