function mostrar()
{
    var mes;

    mes = document.getElementById("mes").value;

    switch(mes)
    {
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
                    
            alert("Tiene 31 d\u00EDas");
    
            break;

        case "Febrero":

            alert("Tiene 28 d\u00EDas");
        
            break;
        
        case "Abril":
        case "Junio":    
        case "Septiembre":
        case "Noviembre":

            alert("Tiene 30 d\u00EDas");
            
            break;        
    }
}
