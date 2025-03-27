const fs = require("fs");
const archivo = "./archivo.txt";

const fn = (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
};

fs.readFile(archivo, fn);

const texto = "Hola Mundo";

fs.writeFile(archivo, texto, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info("Archivo creado");
    }
});

fs.readFile (archivo, fn);