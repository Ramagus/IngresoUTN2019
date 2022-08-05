function mostrar()
{
	var numero;
	var minimo = 1;
	var maximo = 10;
	
	/**Para numeros flotantes**/
	//numero = Math.random() * (maximo - minimo) + minimo;
	
	numero = Math.round(Math.random() * (maximo - minimo) + minimo);
	
	alert("N\u00FAmero generado: " + numero);
}
