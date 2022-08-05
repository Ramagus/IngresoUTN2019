var colorSecreto;
var tiempoInicio = 0;

function comenzar()
{
    var numeroColor;

    numeroColor = Math.floor(Math.random() * 6 + 1);

    switch(numeroColor)
    {
        case 1:
            
            colorSecreto = "Azul";

            break;

        case 2:
            
            colorSecreto = "Amarillo";

            break;
        
        case 3:

            colorSecreto = "Marr\u00F3n";

            break;
        
        case 4:

            colorSecreto = "Verde";

            break;

        case 5:

            colorSecreto = "Celeste";

            break;

        case 6:

            colorSecreto = "Rojo";

            break;
    }

    document.getElementById("colorElegido").value = colorSecreto;
    
    tiempoInicio = setInterval(segundos, 1000);
}

function segundos()
{
    tiempoInicio++;
}

function responder(colorParametro)
{
    if(colorParametro == colorSecreto.toLowerCase())
    {
		alert("Acertaste!!!" + "\nTiempo de demora: " + tiempoInicio + " segundos");
    }
    
    else
    {
		alert("El color elegido es incorrecto" + "\nTiempo de demora: " + tiempoInicio + " segundos");
	}
}
