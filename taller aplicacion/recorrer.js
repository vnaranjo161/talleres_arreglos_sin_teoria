/*1. Dado el arreglo [1,2,3,4,5,6]:
a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
d) Calcular el promedio de todos los elementos del arreglo */
let array =  [1,2,3,4,5,6];
let cont = 0;
while (cont < array.length) {
    console.log(array[cont]);
    cont++;
} 

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);    
}

let array2 = []
for (let index = 0; index < array.length; index++) {
    array2.push(array[index]+1)    
}

let suma = 0
for (let index = 0; index < array.length; index++) {
    suma+=array[index]
}
let promedio = suma/array.length

console.log(promedio);