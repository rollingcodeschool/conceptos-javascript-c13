// Estructuras de repeticion

//tipos de bucles: while, for, do-while

/* while - mientras se cumple tal condicion

while(condicion logica){    
    todas las lineas de codigo que quiero repetir varias veces
    agregar alguna linea que haga que la condicion logica se deje de cumplir en algun momento
}

*/

let renglon = 100;
while (renglon <= 50) {
  document.writeln(`<p>Renglón ${renglon}</p>`);
  renglon++; //renglon = renglon + 1
}

// do-while
/*
do{
 todas las lineas de codigo que quiero
 agregar alguna linea que haga que la condicion logica se deje de cumplir en algun momento
}while(condicion logica)
*/ 

let fila = 100;
do{
    document.writeln(`<p>Fila N ${fila}</p>`);
    fila++
}while(fila <= 50)

// for
/*
for(inicializar variable; condicion logica; increamentar/decrementar variable){
    todas las lineas de codigo que quiero
}
*/

for(let indice = -1; indice >= 0 ; indice-- ){
  document.writeln(`<p>Cuenta regresiva N ${indice}</p>`);
}

