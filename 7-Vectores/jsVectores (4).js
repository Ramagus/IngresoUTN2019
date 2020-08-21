function mostrar()
{
    var miArray;
    var acumulador = 0;
    var i;

    miArray = new Array();

    for(i = 0; i <= 4; i++)
    {
        miArray[i] = parseInt(prompt("Ingrese un número"));

        while(isNaN(miArray[i]))
        {
            miArray[i] = parseInt(prompt("Error. Sólo números"));
        }

        acumulador += miArray[i];
    }
    
    for(i = 0; i <= 4; i++)
    {
        document.write("Posición: " + i + " --> " + miArray[i] + "<br>");
    }
    
    document.write("<h1>" + "La suma de todos los números es: " + acumulador + "</h1>");
}