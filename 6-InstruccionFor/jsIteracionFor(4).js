function mostrar()
{
    var numero;
    var i;

    numero = parseInt(prompt("Ingrese un n\u00FAmero"));
    
    while(isNaN(numero))
    {
        numero = parseInt(prompt("Error. Solo n\u00FAmeros"));
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
