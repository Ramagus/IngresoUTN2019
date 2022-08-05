function mostrar()
{
    var mes;

    mes = document.getElementById("mes").value;

    switch(mes)
    {
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril": 
        case "Mayo":
        case "Junio":

            alert("Falta para el invierno");
    
            break;

        case "Julio": 
        case "Agosto":

            alert("Abrigate que hace fr\u00EDo");

            break;

        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":

            alert("Ya pasamos el fr\u00EDo, ahora calor!!!");

            break;
    }
}
