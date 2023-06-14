function promedioMayor() {
    let cad = 0
    let promMayor = 0
    let cadenas = [[],[]]
    for (let index = 0; index < cadenas.length; index++) {
        let cantidad =  parseInt(prompt(`Ingrese la cantidad de numeros que desea ingresar en el arreglo (${index+1})`))
        for (let i = 0; i < cantidad; i++) {
            let numero = parseInt(prompt(`Ingrese numero (${i+1} de ${cantidad})`))
            cadenas[index].push(numero)      
        }
    }
    let suma = 0
    for (let index = 0; index < cadenas[0].length; index++) {
        suma+=cadenas[0][index]
    }
    let promedio = suma/cadenas[0].length
    let suma2 = 0
    for (let index = 0; index < cadenas[1].length; index++) {
        suma2+=cadenas[1][index]
    }
    let promedio2 = suma2/cadenas[1].length
    if (promedio>promedio2) {
         promMayor = promedio
         cad = cadenas[0]
    } else {
         promMayor = promedio2
         cad = cadenas[1]
    }
    console.log(`La cadena de mayor promedio es "${cad}" y su promedio es de ${promMayor}`);
}
promedioMayor()