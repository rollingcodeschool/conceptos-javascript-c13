// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let text=""
do{
    const palabra = prompt("ingrese lo que desea concatenar")
    if(text.length === 0){
        text= palabra
    }else{
        text=text +"-"+ palabra
    }
     console.log(text.length)
     console.log(text)
}
while(confirm("Presione aceptar para agregar otro texto"))

document.writeln(text)