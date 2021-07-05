var miIntervalo;

function inicio()
{
    alert("Funci\u00F3n Inicio");

    miIntervalo = setInterval(segundosEnElAire, 3000);
}

function segundosEnElAire()
{
    alert("Bienvenidos a la UTN FRA");
}

function fin()
{
    clearInterval(miIntervalo);
    
    alert("Funci\u00F3n Fin");
}
