function sumar()
{
    var num1;
    var num2;
    var resultado;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    resultado = num1 + num2;

    alert("La suma es " + resultado);
}

function restar()
{
    var num1;
    var num2;
    var resultado;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    resultado = num1 - num2;

    alert("La resta es " + resultado);
}

function multiplicar()
{
    var num1;
    var num2;
    var resultado;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    resultado = num1 * num2;

    alert("La multipliaci\u00F3n es " + resultado);
}

function dividir()
{
    var num1;
    var num2;
    var resultado;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    resultado = num1 / num2;

    alert("La divisi\u00F3n es " + resultado);
}
