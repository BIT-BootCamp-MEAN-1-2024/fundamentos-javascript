// Implementar funciones para calcular el promedio de notas de un grupo de estudiantes, dados sus nombres y notas por materia. 
// Determinar que materias aprobo y que materias reprobo.
console.log( 'Hola son main.js' );

// Estudiantes --> 1 - M (Materias)
// Materia --> 1 - Nombre
//         --> 1 - M (Notas)
// Notas   --> [ decimales ]
// Rango   --> 0 - 5
// NotaMin: --> 3.5

/** Valores de entrada 
 * (string) Nombre del Alumno
 * (string) Nombre de la Materia
 * lista(numbers) Notas
 * 
 *  Proceso
 *      promedio: Sumar el total de las notas de una o varias materias y dividirlas por la cantidad de notas
 * 
 *  Valores de salida
 *      promedio de las notas del estudiante
 *      Reprobo o aprobo materias
*/



/** Capturar Estudiantes */
const estudiantes = [];
let opcEstudiante;

do {
    const nombre = prompt( 'Ingresa el nombre del estudiante' );

    /** Capturar Materias */
    const materias = [];
    let opcMateria;

    do {
        const nombre = prompt( 'Ingresa el nombre de la materia' );

        /** Capturar Notas */
        const notas = [];
        let opcNota;

        do {
            const nota = Number( prompt( 'Ingresa la nota:' ) );
            notas.push( nota );

            console.log( notas );

            opcNota = prompt( 'Desea ingresar una nueva nota [S/N]' );

        } while( opcNota.toLowerCase() == 's' );

        const materia = {
            nombre: nombre,
            notas: notas
        };

        materias.push( materia );

        console.log( materias );

        opcMateria = prompt( 'Desea ingresar una nueva materia [S/N]' );

    } while( opcMateria.toLowerCase() == 's' );

    const estudiante = {
        nombre: nombre,
        materias: materias
    };

    estudiantes.push( estudiante );

    console.log( estudiantes );

    opcEstudiante = prompt( 'Desea ingresar un nuevo estudiante [S/N]' );

} while ( opcEstudiante.toLowerCase() == 's' );
