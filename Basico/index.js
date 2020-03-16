//Este archivo ha sido creado con la intención de aprender a trabajar con módulos en js. Desde este archivo sólo llamaré a funciones que hay en otros archivos

//Llamaremos al archivo que tiene las funciones.
const funciones = require('./funciones.js');
const objeto = require('./segundaForma');

console.log(funciones.restar(2, 3));
console.log(funciones.add(2, 3));
console.log(funciones.divide(2, 3));
console.log(funciones.multiply(2, 3));

//Vamos a imprimir el objeto que nos traemos a ver qué sale
console.log(funciones);

//Ahora probamos si la segunda forma también funciona.
console.log(objeto.cuadrados(2));

//Vamos a imprimir el objeto a ver
console.log(objeto);

