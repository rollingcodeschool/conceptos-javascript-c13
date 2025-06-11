// Estructuras de repeticion

//tipos de bucles: while, for, do-while

/* while - mientras se cumple tal condicion

while(condicion logica){    
    todas las lineas de codigo que quiero repetir varias veces
    agregar alguna linea que haga que la condicion logica se deje de cumplir en algun momento
}

*/

let renglon = 1;
while(renglon <= 50){
    document.writeln(`<p>Renglón ${renglon}</p>`)
    renglon++  //renglon = renglon + 1
}


// do-while