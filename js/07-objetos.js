//notacion literal

const pelicula ={
    // propiedades clave: valor
    titulo: 'Episodio 3 la venganza de los siths',
    duracion: '2:20',
    anio: 2005,
    puntaje: 9.5,
    categoria: 'Ciencia ficción',
    actores: ['Ewan Mcgregor', 'Hayden Christensen'],
    //metodos
    reproducir: function (){
        document.writeln(`<p>Comenzo la peli ▶ </p>`)
    },
    detener: () =>{
        document.writeln(`<p>La peli se detuvo ⏹ </p>`)
    }
}

// mostrar el objeto
console.log(pelicula)
document.writeln(pelicula)