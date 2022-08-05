function mostrar()
{
    var sexo;

    sexo = prompt("Ingrese sexo").toUpperCase();

    while(!(sexo == "F" || sexo == "M")) //while(sexo != "F" && sexo != "M")
    {
        sexo = prompt("Error. Solo F o M").toUpperCase();   
    }

    document.getElementById("Sexo").value = sexo;
}
