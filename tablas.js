


let numero = Number(prompt("Elegí una tabla"))
let fin = Number(10)

function tablaMultiplicar(tabla, hasta) {
    for (var i = 1; i <= hasta; i++)
    document.write("<p>" + tabla + " x " + i + " = ", tabla * i + "<\p>");
   }

tablaMultiplicar(numero,fin)

