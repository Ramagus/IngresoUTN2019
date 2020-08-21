function mostrar()
{
	var nota;

	nota = Math.floor(Math.random() * 10 + 1);
	
	if(nota >= 9)
	{
		alert("Nota: " + nota + "\nExcelente");
	}
	
	else if(nota >= 4)
	{
		alert("Nota: " + nota + "\nAprobó");
	}
	
	else
	{
		alert("Nota: " + nota + "\nVamos, la próxima se puede");
	}
}