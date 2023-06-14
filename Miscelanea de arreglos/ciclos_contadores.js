/*6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional,
y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria
en el arreglo) para mostrar cuántas veces aparece el nombre Maria */
let array = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"]
let contador = 0
array.forEach(i => {
    if (i=="Maria") {
        contador++
    }
});
console.log(contador);

/*7. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para mostrar la suma de
sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como
se implementa la variable contadora */
let array2 = [15, 7, 9, 12, 1]
let contador2 = 0
array2.forEach(i => {
    contador2+=i
});
console.log(contador2);

/*8. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de
los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de
arreglos para ver cómo se implementa la variable contadora */
let array3 = [-2, 8, 99, 1, 7]
let contador3 = 0
array3.forEach(i => {
    let cuadrado = i*i
    contador3+=cuadrado
});
console.log(contador3);

/* 9. Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable
contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo.
Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa
la variable contadora. */

let array4 = [true, true, false, true, false, false]
let cont = 0
let contador4 = 0
while (cont<array4.length) {
    if (array4[cont] == false) {
        contador4++
    }
    cont++
}
console.log(contador4);

