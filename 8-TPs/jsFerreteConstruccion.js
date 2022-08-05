function rectangulo() 
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);
    
    if(largo < 1 || isNaN(largo))
    {
        alert("Error. Ingrese una medida v\u00E1lida de largo");
    }

    if(ancho < 1 || isNaN(ancho))
    {
        alert("Error. Ingrese una medida v\u00E1lida de ancho");
    }

    if(largo > 0 && ancho > 0)
    {
        perimetro = largo * 2 + ancho * 2;

        alambre = perimetro * 3;

        alert("Se necesitan comprar " + alambre.toFixed(2) + " metros de alambre");
    }
}

function circulo() 
{
    var radio;
    var perimetro;
    var alambre;
    
    radio = parseFloat(document.getElementById("Radio").value);

    if(radio < 1 || isNaN(radio))
    {
        alert("Error. Ingrese una medida v\u00E1lida de radio");
    }

    else
    {
        perimetro = 2 * Math.PI * radio;
    
        alambre = radio * 3;
    
        alert("Se necesitan comprar " + alambre.toFixed(2) + " metros de alambre");
    }
}

function materiales() 
{
    var largo;
    var ancho;
    var superficie;
    var cemento;
    var cal;
    
    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);
    
    if(largo < 1 || isNaN(largo))
    {
        alert("Error. Ingrese una medida v\u00E1lida de largo");
    }

    if(ancho < 1 || isNaN(ancho))
    {
        alert("Error. Ingrese una medida v\u00E1lida de ancho");
    }

    if(largo > 0 && ancho > 0)
    {
        superficie = largo * ancho;
    
        cemento = superficie * 2;

        cal = superficie * 3;
    
        alert("Para una superficie de " + superficie.toFixed(2) + "m2, se necesitan " + cal + " bolsas de cal y " + cemento + " bolsas de cemento");
    }
}
