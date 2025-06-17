// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// pedir al usuario las filas y columnas
const filas = parseInt(prompt("Ingresa un numero de filas"));
const columnas = parseInt(prompt("Ingresa un numero de columnas"));
let totalCelda = filas * columnas;
console.log(filas, columnas);

//dibujar la tabla
document.writeln(`<table class='table table-striped'><tbody>`);
for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  document.writeln(`<tr>`);
  for(let indiceColumnas=0; indiceColumnas < columnas; indiceColumnas++){
    document.writeln(`<td class='p-2'>${totalCelda--}</td>`);
  }
  document.writeln(`</tr>`);
}
document.writeln(`</tbody></table>`);

//dibujar el valor de las celdas
