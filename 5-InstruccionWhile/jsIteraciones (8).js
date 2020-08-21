function mostrar()
{
    var positivo = 0;
    var negativo = 1;
    var numero;
    var respuesta;
    var flag = 0;

    do
    {
        numero = parseInt(prompt("Ingrese un número"));

        while(isNaN(numero))
        {
            numero = parseInt(prompt("Error. Sólo números"));  
        }

        if(numero >= 0)
        {
            positivo += numero;
        }

        else
        {
            negativo *= numero; //negativo = negativo * numero;
            
            flag = 1;
        }

        respuesta = confirm("¿Desea continuar?");

    } while(respuesta);

    if(flag == 0)
    {
        negativo = 0;
    }
    
    document.getElementById("suma").value = positivo;
    document.getElementById("producto").value = negativo;
}