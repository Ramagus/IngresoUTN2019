var miTemporizador;

function inicio()
{
    alert("Funci\u00F3n Inicio");

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
    clearTimeout(miTemporizador);
    
    alert("Funci\u00F3n Fin");
}
