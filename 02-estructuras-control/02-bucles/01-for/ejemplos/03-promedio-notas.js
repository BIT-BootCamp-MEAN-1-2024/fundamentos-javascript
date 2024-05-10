notas = [4.2, 1.3, 3.1, 5]

let suma = 0 //declaro e inicializo la variable
let promedio = 0

for ( let i = 0; i < notas.length; i++) {
    //console.log(notas[i])
    suma = suma + notas[i] // le asigno el valor de la iteracion a la variable
}

promedio = suma / notas.length

console.log(`la suma de las notas es de ${ suma }`)
console.log(`el promedio de las notas es de ${promedio}`)