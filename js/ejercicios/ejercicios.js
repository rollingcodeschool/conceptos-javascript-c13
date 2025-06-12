let numero = parseInt(
  prompt(`Ingrese un numero para comprobar si es divisible por 2,3,5 o 7`)
);

if (numero % 2 === 0){
    document.writeln(`El numero ${numero} es divisible por: `)
    document.writeln(`2`);
}else if (numero % 3 === 0){
    document.writeln(`3`);
}else if (numero % 5 === 0){
    document.writeln(`5`);
}else if(numero % 7 === 0){
     document.writeln(`7`);
}else{
     document.writeln(`El numero ${numero} no es divisible por estos numeros`)
}

