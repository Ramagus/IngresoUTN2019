function mostrar()
{
    var mes;

    mes = document.getElementById("mes").value;

    switch(mes)
    {
        case "Febrero":

            alert("Este mes no tiene m\u00E1s de 29 d\u00EDas");

            break;

        default:

            alert("Este mes tiene 30 o 31 d\u00EDas");
    }
}
