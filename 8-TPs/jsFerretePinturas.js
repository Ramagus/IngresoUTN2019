var temperatura;

function fahrenheitCentigrados() 
{
    var centigrados;

    temperatura = parseFloat(document.getElementById("Temperatura").value);

    if(isNaN(temperatura))
    {
        alert("Error. Solo n\u00FAmero");
    }

    else
    {
        centigrados = (temperatura - 32) / 1.8;

        alert(temperatura + " º Fahrenheit son " + centigrados.toFixed(1) + " º Cent\u00EDgrados");
    }
}

function centigradosFahrenheit() 
{
    var fahrenheit;

    temperatura = parseFloat(document.getElementById("Temperatura").value);

    if(isNaN(temperatura))
    {
        alert("Error. Solo n\u00FAmero");
    }

    else
    {
        fahrenheit = (temperatura * 1.8) + 32;

        alert(temperatura + " º Cent\u00EDgrados son " + fahrenheit.toFixed(1) + " º Fahrenheit");
    }
}
