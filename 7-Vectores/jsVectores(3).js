function mostrar()
{
    var miArray;
    var i;

    miArray = new Array();

    for(i = 0; i <= 4; i++)
    {
        miArray[i] = parseInt(prompt("Ingrese un n\u00FAmero"));

        while(isNaN(miArray[i]))
        {
            miArray[i] = parseInt(prompt("Error. Solo n\u00FAmeros"));
        }
    }

    for(i = 0; i <= 4; i++)
    {
        document.write("Posici\u00F3n: " + i + " --> " + miArray[i] + "<br>");
    }
}
