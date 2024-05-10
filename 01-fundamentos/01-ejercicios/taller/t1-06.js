// 6. Comparar la edad ingresada por el usuario con tu edad utilizando prompt y alert, y mostrar un mensaje indicando si son iguales o diferentes.

const edad = 46;
let edadUsuario = prompt( 'Ingresa una edad' );
edadUsuario = parseInt( edadUsuario );

if( edad == edadUsuario )
    alert( 'Las edades son iguales' );
else                      
    alert( 'Las edades son diferentes' );