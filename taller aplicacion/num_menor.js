/*3. Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
elementos del arreglo */

let array =  [2,3,1,4,5,6];
function menor(array) {
    let menor = array[0]
    for (let index = 0; index < array.length; index++) {
        if (array[index]< menor) {
            menor = array[index]
        }
    }
    return menor
}
