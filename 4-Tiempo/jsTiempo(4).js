var miIntervalo;
var contador = 0;

function inicio()
{
    alert("Función Inicio");

    miIntervalo = setInterval(segundosEnElAire, 2000);
}

function segundosEnElAire()
{
    contador++;

    alert("Bienvenidos a la UTN FRA" + "\nCantidad de veces mostrado: " + contador);

    if(contador == 5)
    {
        clearInterval(miIntervalo);
    }
}

function fin()
{
    alert("Función Fin");

    clearInterval(miIntervalo);
}