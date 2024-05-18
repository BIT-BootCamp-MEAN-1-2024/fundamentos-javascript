let personas = [ { name: 'Juliana', age: 31, gender: 'Male' } ];

let persona = { name: 'Mariana', age: 23, gender: 'Female' };

/** Agregamos valores a la lista usando los metodos habituales o nativos de las listas en JavaScript */
personas.push( { name: 'Manuela', age: 29, gender: 'Female' }, persona );
personas.push( { name: 'Juan', age: 46, gender: 'Male' } );
personas.unshift( { name: 'Carlos', age: 35, gender: 'Male' } );

// console.log( personas );

/** Agregamos valores a la lista usando el spread y creando una lista nueva */
persona = { name: 'Valentina', age: 23, gender: 'Female' };

personas = [ persona, ...personas ];

// console.log( personas );

/** Eliminar un valor especifico de la lista usando los metodos habituales o navitos de las listas en JavaScript */
const index = 1;
const quantity = 1;
personas.splice( index, quantity );

// console.log( personas );

let personaEliminada = personas.pop();

// console.log( personas );
// console.log( personaEliminada );

personaEliminada = personas.shift();
console.log( personas );
console.log( '**********' );
// console.log( personaEliminada );

/** Iterando la lista para eliminar un objeto comparando un valor con un atributo del mismo, usando un metodo habitual o nativo de las listas en JavaScript */
// for( let i = 0; i < personas.length; i = i + 1 ) {
//     // console.log( personas[ i ].age );
    

//     if( personas[ i ][ 'name' ].toLowerCase() == 'manuela' ) {
//         // console.log( personas[ i ][ 'name' ] );
//         personas.splice( i, 1 );
//     }
// }

// console.log( personas );

// for ( const iterator of [ 2, 5, 7, 3, 1 ] ) {
//     console.log( iterator );
// }

// for (const key in [ 2, 5, 7, 3, 1 ]) {
//     console.log( key );
// }

// for ( const i in personas ) {
    
//     if( personas[ i ][ 'name' ].toLowerCase() == 'manuela' ) {
//         // console.log( personas[ i ][ 'name' ] );
//         personas.splice( i, 1 );
//     }
// }

// console.log( personas );

// for ( const objeto of personas ) {

//         if( objeto[ 'name' ].toLowerCase() == 'manuela' ) {

//             let i = personas.indexOf( objeto );
//             // console.log( i );
//             personas.splice( i, 1 );
//     }
// }

// console.log( personas );



// for( let i = 0; i < personas.length; i = i + 1 ) {
//     // console.log( personas[ i ].age );
    

//     if( personas[ i ][ 'name' ].toLowerCase() == 'manuela' ) {
//         // console.log( personas[ i ][ 'name' ] );
//         personas.splice( i, 1 );
//     }
// }


// let i = 0;
// while( i < personas.length ) {
//     if( personas[ i ][ 'name' ].toLowerCase() == 'manuela' ) {
//         // console.log( personas[ i ][ 'name' ] );
//         personas.splice( i, 1 );
//     }

//     i = i + 1;
// }

// console.log( personas );

// personas.forEach( function( obj ) {
//     // console.log( obj );

//     if( obj.name.toLowerCase() == 'manuela' ) {
//         let i = personas.indexOf( obj );
//         personas.splice( i, 1 );
//     }
// });

// console.log( personas );


const newPersonas = personas.filter( ( obj ) => {
    return obj.name.toLowerCase() != 'manuela';        // Boolean
});

console.log( newPersonas );