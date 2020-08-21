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

		if(numeroUsuario < numeroSecreto)
		{
			alert("El número secreto es más grande");
		}

		else if(numeroUsuario > numeroSecreto)
		{
			alert("El número secreto es más chico");
		}

		else
		{
			switch(contadorIntentos)
			{
				case 1:
				
					alert("Usted es un Psíquico");
				
					break;
				
				case 2:
				
					alert("Excelente percepción");
				
					break;
				
				case 3:
				
					alert("Esto es suerte");

					break;
				
				case 4:
				
					alert("Excelente técnica");
				
					break;
				
				case 5:
				
					alert("Usted está en la media");
				
					break;
				
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				
					alert("Falta técnica");
				
					break;
				
				default:
				
					alert("Afortunado en el amor!!");
			}
	
			document.getElementById("intentos").value = contadorIntentos;
		}
	}
}