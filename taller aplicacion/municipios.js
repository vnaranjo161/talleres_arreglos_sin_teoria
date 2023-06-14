/*Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
“Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
queden en el arreglo que les corresponde. Use ciclos. */

let valle = ["Cali" , "Tulua", "Cartago", "Salento"]
let valleOrdenado = []
let quindio = ["Cordoba","Armenia", "Palmira", "Circasia"]
let quindioOrdenado = []

for (let index = 0; index < valle.length; index++) {
    if (valle[index] != 'Cali' && valle[index] != 'Tulua' && valle[index] != 'Cartago' && valle[index] != 'Palmira') {
        quindioOrdenado.push(valle[index])
    } else {
        valleOrdenado.push(valle[index])
    }
}

for (let index = 0; index < quindio.length; index++) {
    if (quindio[index] != 'Armenia' && quindio[index] != 'Salento' &&quindio[index] != 'Cordoba' &&quindio[index] != 'Circasia') {
        valleOrdenado.push(quindio[index])
    } else {
        quindioOrdenado.push(quindio[index])
    }
}

console.log(`El orden correcto de los arreglos es: \n Quindio: ${quindioOrdenado} \n Valle: ${valleOrdenado}`);
