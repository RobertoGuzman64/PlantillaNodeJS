
//Declaro el objeto PersonajeController (siempre igual para cada controller)
const UsuarioController = {};

//Lógica de cada función.
//Si alguien luego quisiera coger estos datos de nuestra API (un front u otra API externa) tendrá que:
//let resultado= await axios.get(http://localhost3000/usuarios) y recibiremos en este caso lo que en la función getAll nos devuelva por res.
    //req --> Front REQuests to the Back
    //res--> Back RESponses to the Front
UsuarioController.getAll = async (req, res) => {
  
        try {
            //En este caso enviamos estos datos:
            let data = [{
                nombre : "Juan",
                edad: 26,
                hobbie : "futbol"
            },{
                nombre: "Javier",
                edad: 32,
                hobbie: "JavaScript"
            }];

            res.send(data);

        } catch (error) {

            res.send(error);

        }; 
};



//En este caso es un método post que lo que hace es coger lo que nos responda el backend en forma de JSON.
UsuarioController.postAll = async (req, res) => {
    //Es decir lo que escribamos en el body de postman (simulando que viene del front)...
    //IMPORTANTE: en postman decirle que el texto está en formato JSON.
    //IMPORTANTE: si vamos a enviar un objeto de JS, las key DEBEN ser strings.
    //Si quieremos meter un objeto como "data" (línea 14) antes debemos hacerle JSON.stringify() para pasarlo todo a string de JSON.
    let cuerpo = req.body;
    //...nos lo imprime por console.log...
    console.log(cuerpo);

    try {
        //...y también por postman
        res.send(cuerpo);

    } catch (error) {

        res.send(error);

    }; 
};




//Aquí otro método post que lo que hace es comprobar si el json que metemos a mano en postman (simulando lo que sería nuestro front) es ok.
UsuarioController.userLogin = async (req, res) => {
    //Traigo lo que hay en el body de postman
    let data = req.body;
    //Imprimo una respuesta u otra según el login sea ok o no.
    if((data.nombre == "Roberto") && (data.password == "hell")){
        res.send("Login correcto");
    } else {
        res.send("Login incorrecto");
    }
};



//"Cierro" el circuito de enrutado para este fichero JS.(siempre igual)
module.exports = UsuarioController;
























































































