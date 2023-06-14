function mayor() {
    let array = []
    let n = parseInt(prompt("Ingrese la cantidad de numeros que va a ingresar: "))
    for (let index = 0; index < n; index++) {
        let numero = parseInt(prompt(`Ingrese el numero (${index+1} de ${n})`))
        array.push(numero)
    }
    let mayor = array[0]
    for (let index = 0; index < array.length; index++) {
        if (mayor<array[index]) {
        mayor = array[index]
        }
    }
    return mayor
}
 mayor()