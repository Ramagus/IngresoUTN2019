function calcularPrecio() 
{
    var precio = 35;
    var cantidad;
    var marca;
    var descuento;
    var precioConDescuento;
    var importeFinal;
    var iibb;

    cantidad = parseInt(document.getElementById("Cantidad").value);
    
    marca = document.getElementById("Marca").value;

    if(cantidad <= 0 || isNaN(cantidad))
    {
        alert("Error. Ingrese una cantidad v\u00E1lida");
    }

    else
    {
        /**Metodo IF*/
        
        /*if(cantidad >= 6)
        {
            descuento = precio * 50 / 100;
        }

        else if(cantidad == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                descuento = precio * 40 / 100;
            }

            else
            {
                descuento = precio * 30 / 100;
            }
        }

        else if(cantidad == 4)
        {
            if(marca == "ArgentinaLuz" || marca == "FelipeL\u00E1mparas")
            {
                descuento = precio * 25 / 100;
            }

            else
            {
                descuento = precio * 20 / 100;
            }
        }

        else if(cantidad == 3)
        {
            if(marca == "ArgentinaLuz")
            {
                descuento = precio * 15 / 100;
            }

            else if(marca == "FelipeL\u00E1mparas")
            {
                descuento = precio * 10 / 100;
            }

            else
            {
                descuento = precio * 5 / 100;
            }
        }

        else
        {
            descuento = 0;
        }*/

        /**Metodo SWITCH-IF*/

        switch(cantidad)
        {
            case 1:
            case 2:

                descuento = 0;

                break;

            case 3:

                if(marca == "ArgentinaLuz")
                {
                    descuento = precio * 15 / 100;
                }
    
                else if(marca == "FelipeL\u00E1mparas")
                {
                    descuento = precio * 10 / 100;
                }
    
                else
                {
                    descuento = precio * 5 / 100;
                }

                break;

            case 4:

                if(marca == "ArgentinaLuz" || marca == "FelipeL\u00E1mparas")
                {
                    descuento = precio * 25 / 100;
                }
    
                else
                {
                    descuento = precio * 20 / 100;
                }
    
                break;

            case 5:

                if(marca == "ArgentinaLuz")
                {
                    descuento = precio * 40 / 100;
                }
    
                else
                {
                    descuento = precio * 30 / 100;
                }

                break;

            default:

                descuento = precio * 50 / 100;
        }

        precioConDescuento = precio - descuento;

        document.getElementById("precioDescuento").value = precioConDescuento;

        importeFinal = cantidad * precioConDescuento;

        if(importeFinal > 120)
        {
            iibb = importeFinal * 10 / 100;

            importeFinal = importeFinal + iibb;

            alert("Importe Final: $" + importeFinal.toFixed(2) + ". De IIBB, usted pag\u00F3 $" + iibb.toFixed(2));
        }

        else
        {
            alert("Importe Final: $" + importeFinal.toFixed(2));
        }
    }
}
