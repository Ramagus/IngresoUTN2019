var miTemporizador;

function inicio()
{
    alert("Función Inicio");

    miTemporizador = setTimeout(segundosEnElAire, 3000);
}

function segundosEnElAire()
{
    alert("Bienvenido a la UTN FRA");  
}

function fin()
{
    alert("Función Fin");

    clearTimeout(miTemporizador);
}