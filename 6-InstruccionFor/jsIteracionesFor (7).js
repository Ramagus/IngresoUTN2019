function mostrar()
{
    var numero;
    var contadorDivisores = 0;
    var i;
    
    numero = parseInt(prompt("Ingrese un número positivo"));
    
    while(numero <= 0 || isNaN(numero))
    {
        numero = parseInt(prompt("Error. Sólo números positivos"));
    }
    
    console.log("Números divisores:\n");

    for(i = 1; i <= numero; i++)
    {
        if(numero % i == 0)
        {
            contadorDivisores++;

            console.log(i); 
        }
    }
    
    console.log("Cantidad de números divisores: " + contadorDivisores);
}