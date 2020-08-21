function mostrar()
{
    var contador = 0;
    var acumulador = 0;
    var numero;
    var promedio;

    while(contador < 5)
    {
        numero = parseInt(prompt("Ingrese un número"));

        while(isNaN(numero))
        {
            numero = parseInt(prompt("Error. Sólo números"));
        }

        acumulador += numero; //acumulador = acumulador + numero;

        contador++; //contador += 1; //contador = contador + 1;
    }

    promedio = acumulador / contador;

    document.getElementById("suma").value = acumulador;
    document.getElementById("promedio").value = promedio;
}