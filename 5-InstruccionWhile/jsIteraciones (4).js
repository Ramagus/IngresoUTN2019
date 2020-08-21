function mostrar()
{
    var numero;

    numero = parseInt(prompt("Ingrese un número entre 0 y 9"));

    while(!(numero >= 0 && numero <= 9) || isNaN(numero)) //while((numero < 0 || numero > 9) || isNaN(numero))
    {
        numero = parseInt(prompt("Error. El número debe estar entre 0 y 9"));
    }

    document.getElementById("Numero").value = numero;
}