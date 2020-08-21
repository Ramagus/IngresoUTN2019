function mostrar()
{	
    var nombre;
    var edad;

    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;

    alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}