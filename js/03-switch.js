// Cree un programa al estilo de un cajero automatico con las siguientes opciones:
// 1- consultar el saldo
// 2- ingresar dinero
// 3- extraer dinero
/*
switch (opcion){
    case 1:
         todas las lineas de codigo que quiero hacer si la opcion del usuario es 1
         break;
    case 2:
         todas las lineas de codigo que quiero hacer si la opcion del usuario es 2
         break;
    case n:
         todas las lineas de codigo que quiero hacer si la opcion del usuario es n
         break;
    default:
        todas las lineas que quiero ejecutar si no se cumplio ningun caso anterior
}
*/


let saldo = 10000;

do {
  const opcion = prompt(
    "Seleccione una opción : 1- Consultar el saldo, 2- ingresar dinero, 3- extraer dinero"
  );

  switch (opcion) {
    case "saldo":
    case "1":
      alert("Su saldo es $" + saldo);
      break;
    case "2":
      const deposito = parseFloat(
        prompt("Ingrese el monto que desea depositar")
      );
      if (deposito >= 1000 && deposito <= 2000000) {
        console.log(deposito);
        saldo += deposito; //saldo = saldo + deposito;
        document.writeln(
          `Depositaste $${deposito}, tu saldo actual es: $${saldo}`
        );
      } else {
        alert("Ingresaste un monto invalido");
      }
      break;
    case "3":
      const montoExtraer = parseFloat(prompt("Ingresa el monto a extraer"));
      if (montoExtraer <= saldo) {
        saldo -= montoExtraer; //saldo = saldo - montoExtraer;
        document.writeln(
          `El monto a extraer es $${montoExtraer}, tu saldo actual es $${saldo}`
        );
        //document.writeln('El monto a extras es $'+montoExtraer+', tu saldo actual es $' + saldo)
      } else {
        alert("monto invalido");
      }
      break;
    default:
      alert("ingresaste una opción erronea");
  }
} while (confirm("¿Queres realizar otra operación?"));