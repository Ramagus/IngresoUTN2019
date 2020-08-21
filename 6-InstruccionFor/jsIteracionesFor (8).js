function mostrar()
{
    var numero;
    var contador = 0;
    var i;

    numero = parseInt(prompt("Ingrese un número positivo"));

    while(numero <= 0 || isNaN(numero))
    {
        numero = parseInt(prompt("Error. Sólo números positivos"));
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
        alert("El número " + numero + " es primo");
    }

    else
    {
        alert("El número " + numero + " no es primo");
    }
}