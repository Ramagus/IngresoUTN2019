function mostrar()
{
    var numero;
    var contadorPares = 0;
    var i;

    numero = parseInt(prompt("Ingrese un número positivo"));

    while(numero <= 0 || isNaN(numero))
    {
        numero = parseInt(prompt("Error. Sólo números positivos"));
    }

    console.log("Números pares:\n");

    for(i = 1; i <= numero; i++)
    {
        if(i % 2 == 0)
        {
            contadorPares++;

            console.log(i);
        }
    }

    console.log("Cantidad de números pares: " + contadorPares);
}