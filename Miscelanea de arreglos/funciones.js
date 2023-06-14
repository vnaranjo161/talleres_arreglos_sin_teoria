/* 7. Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo recorra,
imprimiendo cada uno de sus elementos*/
let l = [2, 5, 7, 9]
function recorrer(arreglo) {
    arreglo.forEach(i => {
        console.log(i);
    });
}
recorrer(l)
 /*8. Cree una función que reciba un arreglo de n elementos y retorne el número de elementos del
arreglo.*/
function elementos(arreglo) {
    return arreglo.length
}
elementos(l)


/*9. Use indexOf para mostrar los índices de los elementos 44, 89, 70 del arreglo [30, 44, 54, 89, 100] */
let a =  [30, 44, 54, 89, 100]
console.log(a.indexOf(44));
console.log(a.indexOf(89));
console.log(a.indexOf(70));