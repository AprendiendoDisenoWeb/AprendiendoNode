//Esta vez, en vez de exportar cada función, crearé un objeto con funciones dentro y será este el que exporte.

const objetoAExportar =  //Qué nombre más original
{
    cuadrados: function(x)
    {
        return x * x;
    },

    holamundo: function()
    {  
        console.log("Hola, mundo");
    }
};

module.exports = objetoAExportar; //Con exports se exportan propiedades de los objetos y con esto objetos enteros