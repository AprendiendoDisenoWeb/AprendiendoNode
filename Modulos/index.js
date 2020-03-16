//Vamos a empezar viendo un ejemplo de un módulo precreado que podemos utilizar de javascript
//Este módulo se llama os y sirve para interactuar con el sistema operativo

const os = require('os');

//Otro módulo util es fs que nos permitirá leer, escribir y crear archivos
const fs = require('fs');

//Vamos a imprimir nuestro sistema operativo
console.log(os.platform());

//Vamos a probar a crear un archivo
var textoArchivo = "Esto es lo que escribiremos dentro de nuestro archivo";

fs.writeFile('/home/alex/prueba.txt', textoArchivo, function(err) //Esto es lo que se llama código asíncrono
{
    if(err) //Si se produce un error
    {
        console.log(err);
    }
    console.log("Archivo creado");
})