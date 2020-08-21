var miIntervalo;

function inicio()
{
    alert("Función Inicio");

    miIntervalo = setInterval(segundosEnElAire, 3000);
}

function segundosEnElAire()
{
    alert("Bienvenidos a la UTN FRA");
}

function fin()
{
    alert("Función Fin");

    clearInterval(miIntervalo);
}