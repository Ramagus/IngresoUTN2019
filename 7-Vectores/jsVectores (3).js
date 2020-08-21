function mostrar()
{
    var miArray;
    var i;

    miArray = new Array();

    for(i = 0; i <= 4; i++)
    {
        miArray[i] = parseInt(prompt("Ingrese un número"));

        while(isNaN(miArray[i]))
        {
            miArray[i] = parseInt(prompt("Error. Sólo números"));
        }
    }

    for(i = 0; i <= 4; i++)
    {
        document.write("Posición: " + i + " --> " + miArray[i] + "<br>");
    }
}