let frutas = ['Pera', 'Cebolla', 'Limón', 'Pimentón']
let frutasOrdenado = []
let verduras = ['Manzana', 'Banano', 'Lechuga', 'Perejíl']
let verdurasOrdenado = []

for (let index = 0; index < frutas.length; index++) {
    if (frutas[index] != 'Pera' && frutas[index] != 'Limón' && frutas[index] != 'Manzana' && frutas[index] != 'Banano') {
        verdurasOrdenado.push(frutas[index])
    } else {
        frutasOrdenado.push(frutas[index])
}
}

for (let index = 0; index < verduras.length; index++) {
    if (verduras[index] != 'Cebolla' && verduras[index] != 'Pimentón' &&verduras[index] != 'Lechuga' &&verduras[index] != 'Perejíl') {
        frutasOrdenado.push(verduras[index])
    } else {
        verdurasOrdenado.push(verduras[index])
    }
}

console.log(`El orden correcto de los arreglos es: \n frutas: ${frutasOrdenado} \n verduras: ${verdurasOrdenado}`);