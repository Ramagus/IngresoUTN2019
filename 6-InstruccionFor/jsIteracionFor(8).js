function mostrar()
{
    var numero;
    var i;
    var flag = 1;

    numero = parseInt(prompt("Ingrese un n\u00FAmero positivo"));

    while(numero <= 0 || isNaN(numero))
    {
        numero = parseInt(prompt("Error. Solo n\u00FAmeros positivos"));
    }

    for(i = 2; i <= numero / i; i++)
    {
        if(numero % i == 0)
        {
            flag = 0;
            break;
        }
    }

    if(numero != 1 && flag == 1)
    {
        alert("El n\u00FAmero " + numero + " es primo");
    }

    else
    {
        alert("El n\u00FAmero " + numero + " no es primo");
    }
}
