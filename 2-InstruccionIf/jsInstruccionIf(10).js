function mostrar()
{
	var nota;

	nota = Math.round(Math.random() * 9 + 1);
	
	if(nota >= 9)
	{
		alert("Nota: " + nota + "\nExcelente");
	}
	
	else if(nota >= 4)
	{
		alert("Nota: " + nota + "\nAprob\u00F3");
	}
	
	else
	{
		alert("Nota: " + nota + "\nVamos, la pr\u00F3xima se puede");
	}
}
