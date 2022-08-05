var miIntervalo;
var contador = 0;

function inicio()
{
    alert("Funci\u00F3n Inicio");

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
    clearInterval(miIntervalo);
    
    alert("Funci\u00F3n Fin");
}
