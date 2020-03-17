//Vamos a añadir el módulo que nos permitirá crear un servidor http
const http = require('http');
const colors = require('colors'); //cargamos también el módulo que nos hemos descargado mediante npm

//Creamos la función de la que hará uso nuestro servidor
const handleServer = function(req, res) //A esta funcion le pasamos por parámetros las peticiones que recibamos y las respuestas que devolvamos
{
    res.writeHead(200, {'Content-type' : 'text/html'}); //Indicamos la respuesta que devolveremos (Si desde el navegador inspeccionamos y le damos a network, veremos este número)
    res.write('<h1>Hola mundo desde Node JS</h1>');
    res.end();
} 
//Si ahora quisiese cambair el mensaje que hay entre las etiquetas h1, tendría que volver a ejecutar
//el programa con node, no se actualiza automáticamente.

//Creamos el servidor web
http.createServer(handleServer).listen(3000, function()
{
    console.log("Servidor escuchando en el puerto 3000".blue); //Le damos un color gracias al módulo colors que nos hemos descargado con npm
}); //EL método listen nos permite indicar el puerto por el que queremos escuchar
