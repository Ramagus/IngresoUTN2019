var numeroSecreto; 
var numeroUsuario;
var contadorIntentos = 0;

function comenzar()
{
    numeroSecreto = Math.floor(Math.random() * 100 + 1);
	 
    //alert(numeroSecreto);
    
    alert("Número secreto generado");
}

function verificar()
{  
    numeroUsuario = parseInt(document.getElementById("numero").value);

    if(numeroUsuario < 1 || numeroUsuario > 100 || isNaN(numeroUsuario))
    {
        alert("Error. Sólo número de 1 al 100");
    }

    else
    {
        contadorIntentos++;

        if(numeroUsuario == numeroSecreto)
        {
            alert("Usted es un ganador!!! y en sólo " + contadorIntentos + " intentos");
        }

        else if(numeroUsuario < numeroSecreto)
        {
            alert("Falta...");
        }

        else
        {
            alert("Se pasó...");
        }

        document.getElementById("intentos").value = contadorIntentos;
    }
}