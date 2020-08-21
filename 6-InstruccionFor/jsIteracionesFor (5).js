function mostrar()
{
    var numero;

    for( ; ; )
    {
        numero = parseInt(prompt("Ingrese un número"));

        while(isNaN(numero))
        {             
            numero = parseInt(prompt("Error. Sólo números"));
        }

        if(numero == 9)
        {
            break;
        }

        console.log(numero);
    }
}