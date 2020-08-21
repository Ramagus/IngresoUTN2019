var miTemporizador;
var tiempoInicio;
var tiempoFinal;

function inicio()
{
    alert("Función Inicio");

    document.getElementById("secreto").style.visibility = "hidden";

    miTemporizador = setTimeout(segundosEnElAire, 3000);
}

function segundosEnElAire()
{
    document.getElementById("secreto").style.visibility = "visible"; 

    tiempoInicio = new Date();

    tiempoInicio = tiempoInicio.getTime();

    alert(tiempoInicio);
}

function fin()
{
    tiempoFinal = new Date();

    tiempoFinal = tiempoFinal.getTime();

    alert(tiempoFinal - tiempoInicio);
}