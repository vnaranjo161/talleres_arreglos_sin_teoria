/*4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
él. */

let array =  [2,3,1,4,5,6,7];
function primos(array) {
    for (let index = 0; index < array.length; index++) {
        let num  = array[index]
        let primo = 0
        for (let i = 1; i <= num; i++) {
            if (num%i == 0) {
            primo++
            }
        }
        if (primo == 2) {
            console.log(num);
        }
    }
}

primos(array)