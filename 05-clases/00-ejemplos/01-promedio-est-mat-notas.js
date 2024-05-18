// Implementar funciones para calcular el promedio de notas de un grupo de estudiantes, dados sus nombres y notas por materia. 
// Determinar que materias aprobo y que materias reprobo.



let persona = {};
console.log( persona );

persona = {
    nombre: 'Manuela',
    habla: function () {
        console.log( 'Hola  soy ' + this.nombre )
    }
}

class Persona {
    /** Atributos */
    // name = 'Juan';
    // age = 46;

    constructor( nombre, edad ) {
        this.name = nombre;
        this.age = edad;
    }

    /** Getters & Setters */
    getName() {
        return this.name;
    }
    setName( newName ) {
        this.name = newName;
    }
    getAge() {
        return this.age;
    }
    setAge( newAge ) {
        this.age = newAge;
    }

    /** Getters & Setters: Recomendado por JavaScript */
    get nombre() {
        return this.name;
    }
    set nombre( newName ) {
        this.name = newName;
    }
    get edad() {
        return this.age;
    }
    set edad( newAge ) {
        this.age = newAge;
    }

    /** Metodos */
    habla() {
        console.log( 'Hola soy ' + this.name );
    }
}
class Animal {
    // name = 'Milo';
    // age = 3;

    constructor( raza, edad ) {
        this.raza = raza;
        this.age = edad;
    }

    habla() {
        console.log( 'Aqui el animal haria un ruido' );
    }
}

/** Dog { nombre: 'Rex', raza: 'Pastor Aleman', edad: 3 } */
class Dog extends Animal {
    // nombre = '';

    constructor( nombre, raza, edad ) {
        super( raza, edad );
        this.nombre = nombre;
    }

    habla() {
        console.log( 'Guau, guau, guau' );
    }
}

/** Cat { nombre: 'Luna', raza: 'Siames', edad: 2 } */
class Cat extends Animal {
    // nombre = '';

    constructor( nombre, raza, edad ) {
        super( raza, edad );
        this.nombre = nombre;
    }

    habla() {
        console.log( 'Miau, miau, miau' );
    }
}

/** Cow { raza: 'Marron', edad: 1 } */
class Cow extends Animal {
    constructor( raza, edad ) {
        super( raza, edad );
    }
    habla() {
        console.log( 'Muuu, muuu, muuu' );
    }
}

/** Fish { raza: 'Beta', edad: 1 } */
class Fish extends Animal {
    constructor( raza, edad ) {
        super( raza, edad );
    }
    habla() {
        console.log( 'Hace bolitas de aire en el agua' );
    }
    habla( message ) {
        console.log( 'Nemo dice: ' + message );
    }
}

const natalia = new Persona( 'Natalia', 23 );
console.log( natalia );
// natalia.getName();
// natalia.setName( 'Monica' );
// natalia.getName();

natalia.nombre;
natalia.nombre = 'Monica';
natalia.nombre;

natalia.habla();

const manuela = new Persona( 'Manuela', 29 );
console.log( manuela );
manuela.habla();

const milo = new Animal();
console.log( milo );
milo.habla();

const rex = new Dog( 'Rex', 'Pastor Aleman', 3 );
console.log( rex );
rex.habla();

const luna = new Cat( 'Luna', 'Siames', 2 );
console.log( luna );
luna.habla();

const margarita = new Cow( 'Marron', 1 );
console.log( margarita );
margarita.habla();

const nemo = new Fish( 'Beta', 1 );
console.log( nemo );
nemo.habla( 'Natalia vas entendiendo?' );
    




