var tiempoInicio;
var tiempoFinal;
var resultado;

function inicio()
{
    var random = Math.floor(Math.random() * 12000 + 2000);
    
    alert("Funci\u00F3n Inicio");

    setTimeout(segundosEnElAire, random);
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
