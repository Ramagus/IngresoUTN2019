function mostrar()
{
    var numero;
    var respuesta;
    var minimo;
    var maximo;
    var flag = 0;

    do
    {
        numero = parseInt(prompt("Ingrese un número"));

        while(isNaN(numero))
        {
            numero = parseInt(prompt("Error. Sólo números"));
        }

        if(numero > maximo || flag == 0)
        {
            maximo = numero;
        }

        if(numero < minimo || flag == 0)
        {
            minimo = numero;
            
            flag = 1;
        }

        respuesta = confirm("¿Desea continuar?");

    } while(respuesta);
    
    document.getElementById("maximo").value = maximo;
    document.getElementById("minimo").value = minimo;
}