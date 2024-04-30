// 10. Escriba un programa que tome dos números base y altura para calcular el area de un triángulo

const base = 9;
const altura = 10;

function areaTriangulo( base, altura ) {
    const area = ( base * altura ) / 2;

    return area;
}


console.log( `El area del triangulo de base ${ base } y altura ${ altura } es: ${ areaTriangulo( base, altura ) }` );