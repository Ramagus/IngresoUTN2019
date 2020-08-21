var eleccionMaquina;
var eleccionHumano;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;

function comenzar()
{
	var numeroSecreto;
	
	numeroSecreto = Math.floor(Math.random() * 3 + 1);
	
	//alert(numeroSecreto);
	
	switch(numeroSecreto)
	{
		case 1:
			
			eleccionMaquina = "Piedra";
			
			break;
			
		case 2:
			
			eleccionMaquina = "Papel";
			
			break;
			
		case 3:
			
			eleccionMaquina = "Tijera";
			
			break;
	}
	
	//alert(eleccionMaquina);
}

function piedra()
{
	alert("La Máquina seleccionó: " + eleccionMaquina);
	
	eleccionHumano = "Piedra";
	
	if(eleccionHumano == eleccionMaquina)
	{
		alert("Empate");
		
		ContadorDeEmpates++;
	}
	
	else if(eleccionMaquina == "Tijera")
	{
		alert("Ganaste");
		
		ContadorDeGanadas++;
	}
	
	else
	{
		alert("Ganó la Máquina");
		
		ContadorDePerdidas++;
	}
	
	comenzar();
}

function papel()
{
	alert("La Máquina seleccionó: " + eleccionMaquina);
	
	eleccionHumano = "Papel";
	
	if(eleccionHumano == eleccionMaquina)
	{
		alert("Empate");
		
		ContadorDeEmpates++;
	}
	
	else if(eleccionMaquina == "Piedra")
	{
		alert("Ganaste");
		
		ContadorDeGanadas++;
	}
	
	else
	{
		alert("Ganó la Máquina");
		
		ContadorDePerdidas++;
	}
	
	comenzar();
}

function tijera()
{
	alert("La Máquina seleccionó: " + eleccionMaquina);
	
	eleccionHumano = "Tijera";
	
	if(eleccionHumano == eleccionMaquina)
	{
		alert("Empate");
		
		ContadorDeEmpates++;
	}
	
	else if(eleccionMaquina == "Papel")
	{
		alert("Ganaste");
		
		ContadorDeGanadas++;
	}
	
	else
	{
		alert("Ganó la Máquina");
		
		ContadorDePerdidas++;
	}
	
	comenzar();
}