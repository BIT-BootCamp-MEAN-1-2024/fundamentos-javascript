// Implementar funciones para calcular el promedio de notas de un grupo de estudiantes, dados sus nombres y notas por materia. 
// Determinar que materias aprobo y que materias reprobo.

/**
    1. [x] Capturar las notas
    2. [x] Calcular el promedio de las notas
    3. [x] Capturar las materias (asociarlas a sus respectivas notas)
    4. [x] Capturar los estudiantes (asociarlos a sus respectivas materias)
*/

function capturarNotas() {
    const notas = [];
    let opcion;

    do {
        const nota = Number( prompt( 'Ingresa la nota (0-5): ' ) );
        notas.push( nota );

        opcion = prompt( 'Desea continuar agregando notas [S/N]: ' );

    } while ( opcion.toUpperCase() == 'S' );

    return notas;
}

function calcularPromedioNotas( listaNotas ) {       // [ 4, 3, 2, 0, 2.3 ] --> suma de todas notas / cantidad de notas

    let suma = 0;
    let promedio = 0;

    for( let i = 0; i < listaNotas.length; i = i + 1 ) {
        suma = suma + listaNotas[ i ];
    }
    
    promedio = suma / listaNotas.length;

    return promedio;
}

function capturarMaterias() {
    const materias = [];
    let opcion;

    do {
        // 1. Pido el nombre de la materia nueva
        const nombre = prompt( 'Digita el nombre de la materia: ' );

        // 2. Capturo las notas de la materia nueva
        const notas = capturarNotas();

        // 3. Construyo una forma de asociar (nombre, notas) a traves de un objeto (asociarlas a sus respectivas notas)
        const materia = {
            nombre: nombre,
            notas: notas
        };

        // 4. Insertar dentro de la lista materias cada una de las materias creadas en cada iteracion del bucle
        materias.push( materia );

        opcion = prompt( 'Desea continuar agregando materias [S/N]: ' );

    } while ( opcion.toLowerCase() == 's' );

    return materias;
}

function capturarEstudiantes() {
    const estudiantes = [];
    let opcion;

    do {
        // 1. Pido el nombre del nuevo estudiante
        const nombre = prompt( 'Digite el nombre del estudiante: ' );

        // 2. Capturo la materia y sus notas
        const materias = capturarMaterias();

        // 3. Construyo una forma de asociar (nombre, materias) a traves de un objeto (asociar las materias al estudiante)
        const estudiante = {
            nombre: nombre,
            materias: materias
        };

        // 4. Insertar dentro de la lista estudiantes cada una de las todas las materias creadas en cada iteracion del bucle
        estudiantes.push( estudiante );

        opcion = prompt( 'Desea continuar agregando estudiantes [S/N]: ' );

    } while ( opcion.toUpperCase() == 'S' );

    return estudiantes;
}

function init() {
    // 1. Obtener todos los datos que necesita el estudiante (estudiante, materias, notas)
    const estudiantes = capturarEstudiantes();
    // console.log( estudiantes );

    // 2. Calcular el promedio
    // calcularPromedioNotas( notasCadaEstudiante )

    let i = 0;
    while( i < estudiantes.length ) {
        // console.log( estudiantes[ i ].materias );

        const materias = estudiantes[ i ].materias;     // Obtengo la lista de materias del estudiante

        let j = 0;
        while( j < materias.length ) {
            console.log( materias[ j ].notas );
            const notas = materias[ j ].notas;
            const promedio = calcularPromedioNotas( notas );
            materias[ j ].promedio = promedio;
            materias[ j ].aprobo = ( promedio >= 3.5 ) ? 'aprobo' : 'reprobo';

            // console.log( promedio );

            j++;
        }

        i = i + 1;  // i++
    }


    console.log( estudiantes );
}

init();


