function contarPares() {
    let mensaje = `Numeros impares encontrados en el arreglo: \n`
    let numeros = []
    let cantidad = parseInt(prompt(`Cuantos numeros desea ingresar: `))
    for (let index = 0; index < cantidad; index++) {
        let valido = true
        while (valido) {
            let numero = parseInt(prompt(`Ingrese el numero (${index+1} de ${cantidad}): `))
            if (numero > 0) {
                valido = false
                numeros.push(numero)
            } else {
                valido = true
            }
        }
    }
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] % 2 != 0) {
            mensaje+= `${numeros[index]} \n`
        }
    }
    return mensaje   
}
let prueba = mostrarImpares()
console.log(prueba);