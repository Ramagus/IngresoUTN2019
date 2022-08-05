var tiempoInicio;
var tiempoFinal;
var resultado;

function inicio()
{
    alert("Funci\u00F3n Inicio");

    document.getElementById("secreto").style.visibility = "hidden";

    setTimeout(segundosEnElAire, 3000);
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

    alert("Su tiempo fue: " + resultado);
}
