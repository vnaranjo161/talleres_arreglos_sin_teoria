//8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos)
function longitud(array) {
    return array.length
}

/*
9.Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento
del siguiente arreglo ["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema
*/
function contiene(letra) {
    let array = ["a", "b", "c", "d", "e", "f", "g"]
    let contiene = false
    for (let index = 0; index < array.length; index++) {
        if (array[index]== letra.toLowerCase()) {
            contiene = true
            break;
        }        
    }
    if (contiene) {
        return `El arreglo contiene la letra`
    } else {
        return `El arreglo no contiene la letra`

    }
}

