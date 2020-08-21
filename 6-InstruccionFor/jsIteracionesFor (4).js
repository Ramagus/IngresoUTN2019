function mostrar()
{
    var numero;
    var i;

    numero = parseInt(prompt("Ingrese un número"));
    
    while(isNaN(numero))
    {
        numero = parseInt(prompt("Error. Sólo números"));
    }

    for(i = 1; i <= numero; i++)
    {
        if(i > 50)
        {
            break;
        }

        console.log(i);
    }
}