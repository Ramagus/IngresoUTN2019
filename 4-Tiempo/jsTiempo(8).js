var miTemporizador;
var tiempoInicio;
var tiempoFinal;
var resultado;

function inicio()
{
    alert("Función Inicio");

    miTemporizador = setTimeout(segundosEnElAire, 3000);
}

function segundosEnElAire()
{
    document.getElementById("secreto").style.visibility = "visible"; 

    tiempoInicio = new Date();

    tiempoInicio = tiempoInicio.getTime();

    alert(tiempoInicio);
}

function contarMilisegundos()
{
    tiempoFinal = new Date();

    tiempoFinal = tiempoFinal.getTime();

    resultado = tiempoFinal - tiempoInicio;

    alert("Su tiempo fue: " + resultado);
}