function mostrar()
{
    var contador = 0;
    var acumulador = 0;
    var numero;
    var promedio;
    var respuesta;

    do
    {
        numero = parseInt(prompt("Ingrese un número"));

        while(isNaN(numero))
        {
            numero = parseInt(prompt("Error. Sólo números"));
        }

        acumulador += numero;

        contador++;

        respuesta = confirm("¿Desea continuar?"); //respuesta = prompt("¿Desea continuar?").toUpperCase();

        /*while(respuesta != 'S' && respuesta != 'N')
        {
            respuesta = prompt("Error. Sólo S o N").toUpperCase();
        }*/

    } while(respuesta); //while(respuesta == 'S');

    promedio = acumulador / contador;

    document.getElementById("suma").value = acumulador;
    document.getElementById("promedio").value = promedio;
}