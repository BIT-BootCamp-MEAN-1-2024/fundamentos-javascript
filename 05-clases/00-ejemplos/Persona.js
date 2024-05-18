/** Literal Objects */
const alejandro = {};

const personaAlejandra = {
    nombres: 'Alejandra',
    apellidos: 'Mora'
};
const personaJuan = {
    primerNombre: 'Juan',
    segundoNombre: 'Carlos',
    primerApellido: 'Jimenez',
    segundoApellido: 'Gutierrez'
};

/** Clases: Son estructuras o moldes a partir de los cuales pretendemos crear objetos del mismo tipo */
class Person {
    /** Atributos: Se deben definir al principio del cuerpo de la clase y fuera del constructor o cualquier otro método
     *              No son de obligatoriedad definirlos aqui, si son definidos dentro del constructor
     */

    cedula;
    nombres;
    apellidos;
    age;

    constructor( numeroCedula, nombre, apellidos, edad ) {
        this.cedula = numeroCedula;
        this.nombres = nombre;
        this.apellidos = apellidos;
        this.age = edad;
    }

    /** Getters: Funciones para obtener indirectamente los valores de las propiedades o atributos de una clase  */
    obtenerNombres () {
        return this.nombres;
    }
    obtenerCedula() {
        return this.cedula;
    }
    obtenerApellidos() {
        return this.apellidos;
    }
    obtenerEdad() {
        return this.age;
    }

    /** Setters: Funciones para modificar indirectamente los valores de las propiedades o atributos de una clase  */
    modificarNombres ( nuevoNombre ) {
        this.nombres = nuevoNombre;
    }
    modificarApellidos ( nuevoApellido ) {
        this.apellidos = nuevoApellido;
    }
    modificarEdad( nuevaEdad ) {
        this.age = nuevaEdad;
    }
    modificarCedula( nuevaCedula ) {
        this.cedula = nuevaCedula;
    }
}

class Animal {
    constructor( nombre, raza, edad ) {
        this.nombre = nombre;
        this.raza = raza;
        this.age = edad;
    }
}


/** IMPLEMENTACION */
const alejandra = new Person( '12455601', 'Maria Alejandra', 'Mora', 29  );     // Creamos un objeto de la clase Person
const juan = new Person( '79878292', 'Juan Carlos', 'Jimenez', 46 );            // Creamos un segundo objeto de la clase Person
const milo = new Animal( 'Milo', 'Criollo', 3 );                                // Creamos un objeto de la clase Animal

// console.log( milo, alejandra, juan );

console.log( alejandra.nombres );                                               // Evitar acceder directamente a la propiedad o atributo

/** Acceder de forma indirecta a la propiedad o atributo usando sus Getters */
console.log( alejandra.obtenerNombres() );
console.log( alejandra.obtenerApellidos() );
console.log( alejandra.obtenerCedula() );
console.log( alejandra.obtenerEdad() );

alejandra.nombres = 'Alejandra';    // Evitar modificar directamente a la propiedad o atributo
console.log( alejandra.nombres );   // Evitar acceder directamente a la propiedad o atributo

/** Modificar de forma indirecta a la propiedad o atributo usando sus Setters */
alejandra.modificarNombres( 'Maleja' );
console.log( alejandra.obtenerNombres() );

alejandra.modificarApellidos( 'Lopez' );
console.log( alejandra.obtenerApellidos() );

alejandra.modificarEdad( 31 );
alejandra.modificarCedula( 7789990001 );

console.log( alejandra.obtenerCedula() );
console.log( alejandra.obtenerEdad() );




