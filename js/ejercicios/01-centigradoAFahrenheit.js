//crear un programa que calcule cuantos grados fahrenheit son X grados centigrados. Formula = (x °C × 9/5) + 32
document.writeln('<h1>Ejercicio 1</h1>')
const gradoCentigrado = parseInt(prompt('Ingresa los grados centigrados'));
const gradoFahrenheit = (gradoCentigrado * 9/5) + 32 

document.writeln('Los grados centigrados: '+gradoCentigrado+'ºC, equivalen a: '+gradoFahrenheit+'ºF')
//ventana emergente para mostrar un mensaje
alert('Los grados centigrados: '+gradoCentigrado+'ºC, equivalen a: '+gradoFahrenheit+'ºF')