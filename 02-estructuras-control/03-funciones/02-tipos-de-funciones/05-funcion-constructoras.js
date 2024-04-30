/** Función constructora 
    Se llaman a sí mismas dentro de su propia definición, permitiendo realizar tareas repetitivas de manera más eficiente
*/

function Persona( nombre, edad ) {
    this.nombre = nombre;
    this.edad = edad;
}

const persona1 = new Persona( 'Juan', 46 );
const persona2 = new Persona( 'Sofia', 62 );

console.log( persona1, persona2 );
console.log( persona1.nombre, persona2.nombre );