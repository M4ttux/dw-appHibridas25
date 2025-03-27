class Alumno{
    //atributos
    nombre = "";
    apellido = "";
    edad = 0;
    carrera = "";
    materias = [];

    //constructor
    constructor(nombre, apellido, edad, carrera, materias=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = [];
    }

    //metodos

        mostrarCarrera(){
            return this.carrera;
        }

        nombreCompleto(){
            return this.nombre + " " + this.apellido;
        }

        modificarEdad(nuevaEdad){
            this.edad = nuevaEdad;
        }

        agregarMateria(materia){
            this.materias.push(materia);
        }

        mostrarMaterias(){
            return this.materias;
        }

        retornarEdad(){
            return this.edad;
        }
}


//export { Alumno }

module.exports = Alumno;