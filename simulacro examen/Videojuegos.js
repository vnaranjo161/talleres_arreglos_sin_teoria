/*Shirley trabaja como programadora en la empresa Data East programando videojuegos. Ella requiere una función que reciba como
argumentos los arreglos ["s", "W", "@", "3", "a", "p"] y ["#", "p", "a", "z", "@]
y retorne un arreglo con los elementos que sea repiten en ambos, emparejados como una cadena, en este caso: ["@@", "aa", "pp"].
Cree la función que requiere Shirley. */

let array = ["s", "W", "@", "3", "a", "p"];
let array2 = ["#", "p", "a", "z", "@"];


function Repetidos(array, array2) {
    let arregloRepetidos =[]
    array.forEach(i => {
        array2.forEach(j => {
            if (i == j) {
            arregloRepetidos.push(`${j}${i}`)
            }
        });
    });
    return arregloRepetidos
}
let prueba = Repetidos(array, array2)
console.log(prueba);


