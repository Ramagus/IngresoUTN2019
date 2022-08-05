function mostrar()
{
    var repeticiones;
    var i;

    repeticiones = parseInt(prompt("Ingrese el n\u00FAmero de repeticiones"));

    while(isNaN(repeticiones))
    {
        repeticiones = parseInt(prompt("Error. Solo n\u00FAmeros"));
    }

    for(i = 1; i <= repeticiones; i++)
    {
        console.log("Hola UTN FRA");
    }
}
