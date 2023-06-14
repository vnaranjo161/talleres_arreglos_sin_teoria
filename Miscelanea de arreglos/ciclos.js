/*Dado el arreglo [3, 50, 70, 600, 40]:
1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos
2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3
3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos */

let array = [3, 50, 70, 600, 40]
array.forEach(i => {
    console.log(i);
});

array.forEach(j => {
    console.log(j*3);
});

let cont = 0
while (cont < array.length) {
    console.log(array[cont]);
    cont++
}