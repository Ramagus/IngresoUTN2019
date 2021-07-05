function sacarResto()
{
    var num1;
    var num2;
    var resultado;

    num1 = parseInt(document.getElementById("numeroDividendo").value);
    num2 = parseInt(document.getElementById("numeroDivisor").value);

    resultado = num1 % num2;

    alert("El resto es " + resultado);
}
