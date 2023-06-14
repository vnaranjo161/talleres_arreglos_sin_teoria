/*2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
elementos del arreglo.
 */

let array = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"]
function baseUnica(array) {
    let A = ""
    let G = ""
    let C = ""
    let T = ""
    for (let index = 0; index < array.length; index++) {
        for (let i = 0; i < array[index].length; i++) {
            if (array[index][i] == 'A') {
                A+='A'
            }
            if (array[index][i] == 'C') {
                C+='C'
            }if (array[index][i] == 'G') {
                G+='G'
            }if (array[index][i] == 'T') {
                T+='T'
            }
        }
        
    }
    let mensaje = `Las cadenas de una sola base que se pueden formar con el arreglo dado son: \n${A} \n${T} \n${C} \n${G}`
    return mensaje
}
let prueba = baseUnica(array)
console.log( prueba);









/*    for (let index = 0; index < array.length; index++) {
      
        let clave = array[index][0]
        let valido = true
        for (let i = 0; i < array2.length; i++) {
            if (!(array2[i] == clave)) {
                valido = false
                break;
            }
        }
        if (valido) {
            console.log(array2);
        }        

    } */