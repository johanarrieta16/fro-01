const botonRegistrar = document.getElementById('btn-registrar');

// Forma tradicional de escribir una funcion
// function imprimirDatos(){}


//Forma mas actualizada de escribir una funcion (arrow function)
const imprimirDatos = () => {
    let nombre = document.getElementById('txt-nombre').value;
    let apellido = document.getElementById('txt-apellido').value;
    let correo = document.getElementById('txt-correo').value;
    let direccion = document.getElementById('txt-direccion').value;
    let ciudad = document.getElementById('txt-ciudad').value;
    let provincia = document.getElementById('slt-provincia').value;
    let codigoPostal = document.getElementById('text-zip').value;

    if (provincia == '1') {
        provincia = 'San José'
    } else if (provincia == '2') {
        provincia = 'Alajuela'
    } else if (provincia == '3') {
        provincia = 'Cartago'
    } else if (provincia == '4') {
        provincia = 'Heredia'
    } else if (provincia == '5') {
        provincia = 'Puntarenas'
    } else if (provincia == '6') {
        provincia = 'Limón'
    } else if (provincia == '7') {
        provincia = 'Guanacaste'
    } 

    console.log(`El usuario se llama: ${nombre} ${apellido}`)
    console.log(`El correo es: ${correo}`)
    console.log(`Vive en ${direccion}, ${ciudad}, ${provincia}, ${codigoPostal}`)
};

botonRegistrar.addEventListener('click', imprimirDatos);


