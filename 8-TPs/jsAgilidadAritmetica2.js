var respuesta;
var temporizador;
var responder;
var numero1;
var numero2;
var signo;
var operador;
var resultado;

function comenzar()
{
	numero1 = Math.floor(Math.random() * 10 + 1);
    numero2 = Math.floor(Math.random() * 10 + 1);

    signo = Math.floor(Math.random() * 4 + 1);

    switch(signo)
    {
        case 1:

            operador = '+';

            break;

        case 2:

            operador = '-';

            break;

        case 3:

            operador = '/';

            break;

        case 4:

            operador = '*';

            break;
    }

    document.getElementById("PrimerNumero").value = numero1;
    document.getElementById("Operador").value = operador;
    document.getElementById("SegundoNumero").value = numero2;

    temporizador = setTimeout(responder, 5000);
}

function responder()
{   
    respuesta = parseFloat(document.getElementById("Respuesta").value);

    if(isNaN(respuesta))
    {
        alert("Error. Solo n\u00FAmero");
    }

    else
    {
        switch(operador)
        {
            case '+':

                resultado = numero1 + numero2;

                break;

            case '-':

                resultado = numero1 - numero2;

                break;

            case '/':

                resultado = numero1 / numero2;

                break;

            case '*':

                resultado = numero1 * numero2;

                break;
        }

        if(respuesta == resultado)
        {
            alert("El resultado es correcto");
        }

        else
        {
            alert("El resultado es incorrecto" + "\nLa respuesta correcta es: " + resultado);
        }

        clearTimeout(temporizador);
    }
}
