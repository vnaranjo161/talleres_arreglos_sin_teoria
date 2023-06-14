function crearPalabra(array) {
    let palabra = ['o','r','b','i']
    if (array.includes('o') && array.includes('r') &&array.includes('b') &&array.includes('i')) {
        let i = 0;
        while (i < array.length) {
        if (!palabra.includes(array[i])) {
            array.splice(i, 1);
        } else{
            i++;
        }
        }
    }else{
        return `La palabra "orbi" no se puede crear con el  arreglo dado`
    }
    let arrayOrganizado = []
    palabra.forEach(i => {
        array.forEach(j => {
            if (i == j && !arrayOrganizado.includes(i)) {
                arrayOrganizado.push(i)
            }
        });
    });

    return arrayOrganizado
}
let array =  ["b", "p", "s", "z", "o", "b","a", "w", "r", 'i']
let prueba = crearPalabra(array, palabra);
console.log(prueba);