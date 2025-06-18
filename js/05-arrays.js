// como declarar un array
// array vacio
const peliculas = []

// array de canciones
const canciones = ['Batidora', 2010, true, "musica ligera", 'mujer amante']

// mostrar un array
console.log(peliculas)
console.log(canciones)
document.writeln(canciones)

document.writeln('<ul>')
for(let i=0; i< canciones.length; i++){
    document.writeln(`<li>${ canciones[i] }</li>`)
}
document.writeln('</ul>')

