/*Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente.
Se le debe pedir al usuario que introduzca el arreglo */

function ordenarLetras() {
    let letras =[]
    let alfabeto = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `Ñ`, `O`,`P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`]
    let cantidad = parseInt(prompt(`Cuantas letras desea ingresar: `))
    for (let index = 0; index < cantidad; index++) {
        let valido = true
        while (valido) {
           let letra = prompt(`introduzca una letra por favor (letra ${index+1} de ${cantidad})`).toUpperCase()
           if (letras.includes(letra) || !alfabeto.includes(letra)) {
            valido = true
           }else{
            valido = false
            letras.push(letra)
           } 
        }        
    }
    let letrasOrdenadas = []
    for (let index = 0; index < alfabeto.length; index++) {
        for (let i = 0; i < letras.length; i++) {
            if (letras[i] == alfabeto[index]) {
                letrasOrdenadas.push(letras[i])
            }            
        }        
    }

    return letrasOrdenadas
}
let prueba = ordenarLetras()
console.log(prueba);
