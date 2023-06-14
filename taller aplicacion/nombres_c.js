function NombresC() {
    let nombres = []
    let contiene = false
    let C = 0
    let cantidad = parseInt(prompt(`Ingrese la cantidad de nombres que desea ingresar: `))
    for (let index = 0; index < cantidad; index++) {
        let nombre = prompt(`Ingrese el nombre (${index+1} de ${cantidad})`)
        nombres.push(nombre)
    }
    for (let index = 0; index < nombres.length; index++) {
        for (let i = 0; i < nombres[index].length; i++) {
            if (nombres[index][i].toLowerCase() == "c") {
                C++
                contiene = true
            }
        }
    }
    if (contiene) {
        console.log(`El arreglo si contiene nombres con la letra "c", en el arreglo hay un total de ${C} letras "c"`);
    } else {
        console.log(`El arreglo no tiene ningu nombre que contenga la letra c`);
    }
}
NombresC()