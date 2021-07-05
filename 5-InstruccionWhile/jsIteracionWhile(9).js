function mostrar()
{
    var numero;
    var respuesta;
    var minimo;
    var maximo;
    var flag = 0;

    do
    {
        numero = parseInt(prompt("Ingrese un n\u00FAmero"));

        while(isNaN(numero))
        {
            numero = parseInt(prompt("Error. Solo n\u00FAmeros"));
        }

        if(flag == 0 || numero > maximo)
        {
            maximo = numero;
        }

        if(flag == 0 || numero < minimo)
        {
            minimo = numero;
            
            flag = 1;
        }

        respuesta = confirm("¿Desea continuar?");

    } while(respuesta);
    
    document.getElementById("maximo").value = maximo;
    document.getElementById("minimo").value = minimo;
}
