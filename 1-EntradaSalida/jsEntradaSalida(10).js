function mostrarDescuento()
{
    var importe;
    var descuento;
    var importeFinal;

    importe = parseInt(document.getElementById("importe").value);

    descuento = importe * 25 / 100;

    importeFinal = importe - descuento;

    alert("El descuento es " + descuento);

    document.getElementById("resultado").value = importeFinal;
}
