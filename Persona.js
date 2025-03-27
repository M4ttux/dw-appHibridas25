
const fs = require("fs");



class Persona{
    //atributos
    nombre = "";
    apellido = "";
    edad = 0;

    //constructor
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    //metodos

}

const key = "123456";


//export {Persona , key};

module.exports = {Persona , key};