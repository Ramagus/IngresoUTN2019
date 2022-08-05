function mostrarAumento()
{
    var sueldo;
    var aumento;
    var nuevoSueldo;

    sueldo = parseInt(document.getElementById("sueldo").value);

    aumento = sueldo * 10 / 100; 

    nuevoSueldo = sueldo + aumento;

    alert("El aumento es " + aumento);

    document.getElementById("resultado").value = nuevoSueldo;
}
