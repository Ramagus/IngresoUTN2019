function mostrar()
{
    var miArray;
    var i;

    miArray = new Array();

    miArray[0] = "Juan";
    miArray[1] = "Luis";
    miArray[2] = "María";
    miArray[3] = "Nahuel";
    miArray[4] = "Yolanda";

    document.write("El contenido del vector es:" + "<br>");

    for(i = 0; i <= 4; i++)
    {
        document.write("Posición: " + i + " --> " + miArray[i] + "<br>");
    }
}