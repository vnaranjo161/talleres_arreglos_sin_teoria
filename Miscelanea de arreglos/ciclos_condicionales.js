/*Dado el arreglo [3, 50, 70, 600, 40]:
Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos
son pares*/

let array = [3, 50, 70, 600, 40]
let pares= `Numeros pares: \n`
for (let index = 0; index < array.length; index++) {
    if (array[index]%2==0) {
        pares+=`${array[index]} `
    }
}
console.log(pares);

/*5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"]:
usar un ciclo y un condicional para mostrar si el nombre Juan se encuentra dentro del arreglo*/
let array2 = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
let cont = false
array2.forEach(i => {
    if (i == `Juan`) {
        cont = true
    }
});
if (cont) {
    console.log(`El nombre juan si esta en el arreglo`);
} else {
    console.log(`El nombre juan no esta en el arreglo`);

}


