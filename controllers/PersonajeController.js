//Importo la clase axios en y la guardo en la variable axios (siempre igual)
const axios = require('axios');
//Declaro el objeto PersonajeController (siempre igual para cada controller)
const PersonajeController = {};


//Declaro la función getAll
//Siempre son asíncronas y llevan dos argumentos:
//req --> Front REQuests to the Back
//res--> Back RESponses to the Front
PersonajeController.getAll = async (req, res) => {
  
        try {
            //En este caso es un método get(porque así se ha definido en UsuarioRouter), para traernos datos desde una API externa...
            let resultado = await axios.get("https://rickandmortyapi.com/api/character");

            //... e imprimirlos por postman.
            //El ".data.results" es porque la API de Rick y Morty estructura así sus datos. Normalmente siempre hay que poner .data para coger de APIs externas
            res.send(resultado.data.results);

        } catch (error) {

            res.send(error);

        }; 
};






//"Cierro" el circuito de enrutado para este fichero JS.(siempre igual)
module.exports = PersonajeController;