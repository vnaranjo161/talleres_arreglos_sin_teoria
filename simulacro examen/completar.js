/*a) Dado el arreglo let edades = [20, 16, 19, 17, 20,
18, 22, 17] complete donde aparecen las rayas
( ____ ) para contar y mostrar cuántas edades
dentro del arreglo corresponden a mayores de
edad:
*/
let edades = [20, 16, 19, 17, 20, 18, 22, 17]
let mayores = 0
for (let index = 0; index < edades.length; index++) {
    if (edades[index] >= 18){
        mayores++
    }
}
console.log(mayores)
/*
b)Dado el arreglo let datos = [20, 33, 67, 4, 60]
complete donde aparecen las rayas ( ____ ) para
mostrar el promedio de los elementos del arreglo:
 */
let datos = [20, 33, 67, 4, 60]
let contador = 0
let suma = 0
while (contador < datos.length) {
 suma = suma + datos[contador]
 contador++ 
}
console.log(suma / datos.length)
