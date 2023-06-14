function tiamina() {
    let cadenas = [];
    let cantidad = prompt('Ingrese el número de cadenas que desea ingresar');
    
    for (let index = 0; index < cantidad; index++) {
        let valido = true;
        let cadena = '';    
        while (valido) {
            cadena = prompt(`Ingrese la cadena ${index+1}: `);
            cadena = cadena.toUpperCase();
            
            for (let i = 0; i < cadena.length; i++) {
                if (cadena[i] != 'A' && cadena[i] != 'T' && cadena[i] != 'C' && cadena[i] != 'G') {
                    valido = true;
                    break;
                } else {
                    valido = false;
                }            
            }
        }
        
        cadenas.push(cadena);
    }

    let repeticiones = 0
    let masTiamina = ''
    cadenas.forEach(i => {
        let rep = 0
        for (let index = 0; index < i.length; index++) {
            if (i[index] == `T`) {
                rep++
            } 
        }
        if (rep>repeticiones) {
            repeticiones = rep
            masTiamina = i
        }
    });

    return`La cadena con mas cantidad de timanina es: \n ${masTiamina}`
}
let prueba = tiamina()
console.log(prueba);