// Estructura condicional simple
/*

if(condicion logica){
    todas las lineas de codigo que quiero que el programa haga si se cumple la condicion
}

*/
// Estructura condicional doble

/*

if(condicion logica){
    todas las lineas de codigo que quiero que el programa haga si se cumple la condicion
}else{
   todas las lineas de codigo que quiero que el programa haga si no se cumple la condicion
}

Estructura condicional con else-if

if(condicion logica){
    todas las lineas de codigo que quiero que el programa haga si se cumple la condicion
}else-if(condicion 2){
    todas las lineas de codigo que quiero que el programa haga si no se cumple la condicion 1, pero si la condicion 2 
}else{
todas las lineas de codigo que quiero que el programa haga si no se cumple la condicion 2 
}
*/

//Pedir la edad y decir si es mayor de edad: Crear un algoritmo que pida la edad del usuario y determine
//si es mayor de edad (18 años o más).
const edad = parseInt(prompt("Ingresa tu edad"));
console.log(edad)
//si la edad esta entre 0 y 110 años
//&& AND
// || OR

if(edad > 0 && edad<= 110){
    if (edad >= 18) {
      alert("Sos mayor de edad");
    } else {
      alert("Sos menor de edad");
    }
}else{
    alert('valor erroneo')
}


