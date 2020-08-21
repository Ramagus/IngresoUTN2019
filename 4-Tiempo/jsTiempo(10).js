var miTemporizador;
var tiempoInicio;
var tiempoFinal;
var resultado;

function inicio()
{
    var random = Math.floor(Math.random() * 12000 + 2000);
    
    alert("Función Inicio");

    miTemporizador = setTimeout(segundosEnElAire, random);
}

function segundosEnElAire()
{
    document.getElementById("secreto").style.visibility = "visible"; 

    tiempoInicio = new Date();

    tiempoInicio = tiempoInicio.getTime();
}

function contarMilisegundos()
{
    tiempoFinal = new Date();

    tiempoFinal = tiempoFinal.getTime();

    resultado = tiempoFinal - tiempoInicio;

    if(resultado >= 0 && resultado <= 500)
    {
        alert("Usted es Flash" + "\nTiempo: " + resultado);
    }

    else if(resultado >= 501 && resultado <= 1000)
    {
        alert("Bien ahí, seguí practicando" + "\nTiempo: " + resultado);
    }

    else if(resultado >= 1001 && resultado <= 3000)
    {
        alert("¿Tenemos los deditos duros?" + "\nTiempo: " + resultado);
    }

    else
    {
        alert("¿Te quedaste dormido?" + "\nTiempo: " + resultado);
    }
}