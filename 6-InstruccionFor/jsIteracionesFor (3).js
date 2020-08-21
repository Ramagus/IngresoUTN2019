function mostrar()
{
    var repeticiones;
    var i;

    repeticiones = parseInt(prompt("Ingrese el número de repeticiones"));

    while(isNaN(repeticiones))
    {
        repeticiones = parseInt(prompt("Error. Sólo números"));
    }

    for(i = 1; i <= repeticiones; i++)
    {
        console.log("Hola UTN FRA");
    }
}