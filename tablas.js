


let numero = Number(prompt("Elegí una tabla"))
let fin = Number(10)

function tablaMultiplicar(tabla, hasta) {
    document.write("<h6>Tabla del " + tabla + "</h6>"); 
    for (var i = 1; i <= hasta; i++)
    document.write("<p>" + tabla + " x " + i + " = ", tabla * i + "<\p>");
   }

tablaMultiplicar(numero,fin)
