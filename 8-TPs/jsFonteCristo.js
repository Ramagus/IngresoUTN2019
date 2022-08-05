var numero;
var i;

function comenzarIngreso() 
{    
    numero = parseInt(document.getElementById("numero").value);
}

function numerosPares()
{
    var contadorPares = 0;

    comenzarIngreso();

    if(isNaN(numero))
    {
        alert("Error. Solo n\u00FAmero");
    }

    else
    {
        for(i = numero; i >= 0; i--)
        {
            if(i % 2 == 0)
            {
                contadorPares++;
            }
        }

        alert("Cantidad de n\u00FAmeros pares: " + contadorPares);
    }
}

function numerosImpares()
{
    var contadorImpares = 0;

    comenzarIngreso();

    if(isNaN(numero))
    {
        alert("Error. Solo n\u00FAmero");
    }

    else
    {
        for(i = numero; i >= 0; i--)
        {
            if(i % 2 != 0)
            {
                contadorImpares++;
            }
        }

        alert("Cantidad de n\u00FAmeros impares: " + contadorImpares);
    }
}

function numerosDivisibles()
{
    var contadorDivisibles = 0;

    comenzarIngreso();

    if(isNaN(numero))
    {
        alert("Error. Solo n\u00FAmero");
    }

    else
    {
        for(i = 1; i <= 100; i++)
        {
            if(numero % i == 0)
            {
                contadorDivisibles++;
            }
        }

        alert("Cantidad de n\u00FAmeros divisibles: " + contadorDivisibles);
    }
}

function verificarPrimo()
{
    var contadorDePrimos = 0;

    comenzarIngreso();

    if(isNaN(numero))
    {
        alert("Error. Solo n\u00FAmero");
    }

    else
    {
        for(i = 1; i <= numero; i++)
        {
            if(numero % i == 0)
            {
                contadorDePrimos++;
            }
        }

        if(contadorDePrimos == 2)
        {
            alert("El n\u00FAmero " + numero + " es un n\u00FAmero primo");
        }

        else
        {
            alert("El n\u00FAmero " + numero + " no es un n\u00FAmero primo");
        }
    }
}

function numerosPrimos()
{
    var j;
    var contadorDivisiones;
    var contadorPrimos = 0;

    comenzarIngreso();

    if(isNaN(numero))
    {
        alert("Error. Solo n\u00FAmero");
    }

    else
    {
        for(i = numero; i >= 0; i--)
        {
            contadorDivisiones = 0;
        
            for(j = 1; j <= numero; j++)
            {
                if(i % j == 0)
                {
                    contadorDivisiones++;
                }
            }
        
            if(contadorDivisiones == 2)
            {
                contadorPrimos++;
            }
        }

        alert("Cantidad de n\u00FAmeros primos: " + contadorPrimos);
    }
}
