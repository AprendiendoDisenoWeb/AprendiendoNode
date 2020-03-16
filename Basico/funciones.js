function add(x1, x2)
{
    return x1 + x2;
}

function substract(x1, x2)
{
    return x1 - x2;
}

function multiply(x1, x2)
{
    return x1 * x2;
}

function divide(x1, x2)  //No podemos dividir por 0.
{
    if(x2 == 0)
    {
        console.log("No se puede dividir por cero");
    }
    else
    {
        return x1 / x2;
    }
}

//Ahora vamos a exportar estas funciones para que pudean ser usados por otros archivos
exports.add = add;
exports.restar = substract; //Podemos indicar el nombre que queramos, basta con asignarle una función real. (aunque lo lógico es que las llamemos igual)
exports.multiply = multiply;
exports.divide = divide;