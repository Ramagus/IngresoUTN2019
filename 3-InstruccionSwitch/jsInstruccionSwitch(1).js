function mostrar()
{
    var mes;

    mes = document.getElementById("mes").value;

    switch(mes)
    {
        case "Enero": 

            alert("Que comiences bien el a\u00F1o!!!");

            break;
    
        case "Marzo": 

            alert("A clases!!!");
    
            break;
        
        case "Julio": 
        
            alert("Se vienen las vacaciones!!!");
        
            break;
            
        case "Diciembre": 
            
            alert("Felices Fiestas!!!");
            
            break; 
    }
}
