function mostrar()
{
    var clave;

    clave = prompt("Ingrese la contraseña");

    while(!(clave == "utn750")) //while(clave != "utn750")
    {
        clave = prompt("Contraseña incorrecta. Reingrese");
    }

    alert("Contraseña correcta!!!");
}