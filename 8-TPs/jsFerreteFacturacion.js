function sumar() 
{
    var precio1;  
    var precio2;    
    var precio3;
    var suma;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    if(precio1 <= 0 || isNaN(precio1))
    {
        alert("Error. Ingrese un precio v\u00E1lido para el precio 1");
    }

    if(precio2 <= 0 || isNaN(precio2))
    {
        alert("Error. Ingrese un precio v\u00E1lido para el precio 2");
    }

    if(precio3 <= 0 || isNaN(precio3))
    {
        alert("Error. Ingrese un precio v\u00E1lido para el precio 3");
    }

    if(precio1 > 0 && precio2 > 0 && precio3 > 0)
    {
        suma = precio1 + precio2 + precio3;

        alert("La suma de los precios es $" + suma.toFixed(2));
    }
}

function promedio() 
{
    var precio1;  
    var precio2;    
    var precio3;
    var promedio;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    if(precio1 <= 0 || isNaN(precio1))
    {
        alert("Error. Ingrese un precio v\u00E1lido para el precio 1");
    }

    if(precio2 <= 0 || isNaN(precio2))
    {
        alert("Error. Ingrese un precio v\u00E1lido para el precio 2");
    }

    if(precio3 <= 0 || isNaN(precio3))
    {
        alert("Error. Ingrese un precio v\u00E1lido para el precio 3");
    }

    if(precio1 > 0 && precio2 > 0 && precio3 > 0)
    {
        promedio = (precio1 + precio2 + precio3) / 3;

        alert("El promedio de los precios es $" + promedio.toFixed(2));
    }
}

function precioFinal() 
{
    var precio1;  
    var precio2;    
    var precio3;
    var suma;
    var iva;
    var precioFinal;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    if(precio1 <= 0 || isNaN(precio1))
    {
        alert("Error. Ingrese un precio v\u00E1lido para el precio 1");
    }

    if(precio2 <= 0 || isNaN(precio2))
    {
        alert("Error. Ingrese un precio v\u00E1lido para el precio 2");
    }

    if(precio3 <= 0 || isNaN(precio3))
    {
        alert("Error. Ingrese un precio v\u00E1lido para el precio 3");
    }

    if(precio1 > 0 && precio2 > 0 && precio3 > 0)
    {
        suma = precio1 + precio2 + precio3;

        iva = suma * 21 / 100;

        precioFinal = suma + iva;

        alert("El precio final es $" + precioFinal.toFixed(2));
    }
}
