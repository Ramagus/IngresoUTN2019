function mostrar()
{
    var miArray;
    var acumulador = 0;
    var i;

    miArray = new Array();

    for(i = 0; i <= 4; i++)
    {
        miArray[i] = parseInt(prompt("Ingrese un n\u00FAmero"));

        while(isNaN(miArray[i]))
        {
            miArray[i] = parseInt(prompt("Error. Solo n\u00FAmeros"));
        }

        acumulador += miArray[i];
    }
    
    for(i = 0; i <= 4; i++)
    {
        document.write("Posici\u00F3n: " + i + " --> " + miArray[i] + "<br>");
    }
    
    document.write("<h1>" + "La suma de todos los n\u00FAmeros es: " + acumulador + "</h1>");
}
