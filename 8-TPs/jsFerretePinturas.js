var temperatura;

function fahrenheitCentigrados() 
{
    var centigrados;

    temperatura = parseFloat(document.getElementById("Temperatura").value);

    if(isNaN(temperatura))
    {
        alert("Error. Sólo número");
    }

    else
    {
        centigrados = (temperatura - 32) / 1.8;

        alert(temperatura + " º Fahrenheit son " + centigrados.toFixed(1) + " º Centígrados");
    }
}

function centigradosFahrenheit() 
{
    var fahrenheit;

    temperatura = parseFloat(document.getElementById("Temperatura").value);

    if(isNaN(temperatura))
    {
        alert("Error. Sólo número");
    }

    else
    {
        fahrenheit = (temperatura * 1.8) + 32;

        alert(temperatura + " º Centígrados son " + fahrenheit.toFixed(1) + " º Fahrenheit");
    }
}