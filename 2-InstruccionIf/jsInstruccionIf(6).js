function mostrar()
{
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if(edad >= 18)
    {
        alert("Es mayor de edad");
    }

    else if(edad >= 13 && edad <=17)
    {
        alert("Es adolescente");
    }

    else
    {
        alert("Es ni\u00F1o");
    }
}
