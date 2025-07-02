//Personas: nombre, apellido, fechaNacimiento, provincia, dni, email, dir, tel.
//calcularEdad, cambiarContraseña, mostrarDatos

// Alumnos
// pagar()

class Persona{
    constructor(nombre, apellido, fechaNacimiento, provincia, dni, email, direccion, telefono, contrasenia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.provincia = provincia;
        this.fechaNacimiento = fechaNacimiento;
        this.DNI= dni;
        this.email = email;
        this.direccion = direccion
        this.telefono = telefono
        this.contrasenia = contrasenia
        // valor por defecto
        this.estado = true;
    }

    // metodos
    mostrarDatos(){
        // lo que quiero que haga el metodo 
        document.writeln(`<ul>
            <li>Nombre y apellido: ${this.apellido}, ${this.nombre} </li>
            <li>Email: ${this.email}</li>
            <li>Telefono: ${this.telefono}</li>
            <li>Dirección: ${this.direccion}</li>
            </ul>`)
    }

    calcularEdad(){}

    cambiarContrasenia(contraseniaActual,contraseniaNueva ){
        if( contraseniaActual === this.contrasenia){
            this.contrasenia = contraseniaNueva;
            console.log('cambiaste la contraseña')
        }
    }
}


// logica de mi programa

const maxi = new Persona('Maximiliano', 'Gomez Tolrá', '10/04/2000', 'Tucumán', '44665777', 'maxi@gomeztolra.com', null, '3813444555', '%1234ABc$')
const agus = new Persona('Agustina', 'Bulacio', '10/04/2004', 'Tucumán', '47665777', 'agus@bulacio.com', null, '38133456456', '%1234ABc$')

console.log(maxi);

maxi.mostrarDatos()
agus.mostrarDatos()