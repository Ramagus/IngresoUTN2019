function mostrar()
{
    var contador = 0;
    var acumulador = 0;
    var numero;
    var promedio;

    while(contador < 5)
    {
        numero = parseInt(prompt("Ingrese un n\u00FAmero"));

        while(isNaN(numero))
        {
            numero = parseInt(prompt("Error. Solo n\u00FAmeros"));
        }

        acumulador += numero; //acumulador = acumulador + numero;

        contador++; //contador += 1; //contador = contador + 1;
    }

    promedio = acumulador / contador;

    document.getElementById("suma").value = acumulador;
    document.getElementById("promedio").value = promedio;
}
