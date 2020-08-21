var miTemporizador;

function inicio()
{
    alert("Función Inicio");

    document.getElementById("secreto").style.visibility = "hidden";

    miTemporizador = setTimeout(segundosEnElAire, 3000);
}

function segundosEnElAire()
{
    alert("Bienvenido a la UTN FRA");

    document.getElementById("secreto").style.visibility = "visible"; 
}

function fin()
{
    alert("Función Fin");

    clearTimeout(miTemporizador);
}