function mostrar()
{
    var numero;
    var contador = 0;
    var i;

    numero = parseInt(prompt("Ingrese un n\u00FAmero positivo"));

    while(numero <= 0 || isNaN(numero))
    {
        numero = parseInt(prompt("Error. Solo n\u00FAmeros positivos"));
    }

    for(i = 1; i <= numero; i++)
    {
        if(numero % i == 0)
        {
            contador++;
        }
    }

    if(contador == 2)
    {
        alert("El n\u00FAmero " + numero + " es primo");
    }

    else
    {
        alert("El n\u00FAmero " + numero + " no es primo");
    }
}
