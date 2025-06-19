// como declarar un array
// array vacio
const peliculas = [];

// array de canciones
const canciones = ["Batidora", 2010, true, "musica ligera", "mujer amante"];

// mostrar un array
console.log(peliculas);
console.log(canciones);
document.writeln(canciones);
const indice = 0;
document.writeln(`<p>Mostrar un solo elemento del array: ${canciones[3]}</p>`);
document.writeln(
  `<p>Mostrar el primer elemento del array: ${canciones[indice]}</p>`
);
document.writeln(
  `<p>Mostrar el elemento de la posicion 30 del array: ${canciones[30]}</p>`
);

document.writeln("<h2 class='mt-3'>Mostrar el array de canciones</h2>");
document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
  document.writeln(`<li class="list-group-item">${canciones[i]}</li>`);
}
document.writeln("</ul>");

// agregar elementos al array

document.writeln("<h2 class='mt-3'>Agregar un elemento al inicio del array</h2>");
canciones.unshift(false, 'like stone' )

document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
  document.writeln(`<li class="list-group-item">${canciones[i]}</li>`);
}
document.writeln("</ul>");

document.writeln("<h2 class='mt-3'>Agregar un elemento al final del array</h2>");
canciones.push('like a Rolling stone')

document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
  document.writeln(`<li class="list-group-item">${canciones[i]}</li>`);
}
document.writeln("</ul>");

canciones.splice(4,0,'feel Good inc')
document.writeln(`<h2 class='mt-3'>Agregar un elemento en el medio del array - cantidad de elementos ${canciones.length}</h2>`);

document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
  document.writeln(`<li class="list-group-item">${canciones[i]}</li>`);
}
document.writeln("</ul>");

//borrar elementos del array
canciones.shift();

document.writeln(`<h2 class='mt-3'>Borrar un elemento del inicio del array - cantidad de elementos ${canciones.length}</h2>`);

document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
  document.writeln(`<li class="list-group-item">${canciones[i]}</li>`);
}
document.writeln("</ul>");

canciones.pop()
document.writeln(`<h2 class='mt-3'>Borrar un elemento del final del array - cantidad de elementos ${canciones.length}</h2>`);

document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
  document.writeln(`<li class="list-group-item">${canciones[i]}</li>`);
}
document.writeln("</ul>");

 canciones.splice(2,1)
// canciones.splice(2,3) //desde la posicion 2 del array borro 3 elementos
// canciones.splice(2) //borrar todo desde la posicion 2 del array
// canciones.splice( canciones.length - 1 ,1)
document.writeln(`<h2 class='mt-3'>Borrar un elemento del medio del array - cantidad de elementos ${canciones.length}</h2>`);

document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
  document.writeln(`<li class="list-group-item">${canciones[i]}</li>`);
}
document.writeln("</ul>");

//modificar elementos del array
canciones[3] = 'Sobredosis de TV'
document.writeln(`<h2 class='mt-3'>Modificar un elemento del array - cantidad de elementos ${canciones.length}</h2>`);

document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
  document.writeln(`<li class="list-group-item">${canciones[i]}</li>`);
}
document.writeln("</ul>");