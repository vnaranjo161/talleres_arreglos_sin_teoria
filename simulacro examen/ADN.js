/*Mariana, que trabaja en la
empresa BioGenetics S.A, requiere una función que
pida al usuario un arreglo con cuatro cadenas de
ADN como elementos, cada cadena debe ser de
logitud 7. Un ejemplo de un arreglo ingresado por
el usuario sería: [“AATGAAC”, “GTTTTTC”,
“GGTAAAT”, “CCCCATG”]) .Luego de obtener el
arreglo del usuario, muestre cuál es la base que más
se repite en tales cadenas que forman el arreglo.
Recuerde que una cadena de ADN puede contener
las cuatro bases químicas, solo tres bases, solo dos
bases o solo una base, por ejemplo:
“AGTTCCAT” cadena formada por 4 bases
“ATTAGATC” cadena formada por 3 bases
“AATTTATA” cadena formada por 2 bases
“CCCCCCC” cadena formada por 1 base */
function baseRepetida() {
    let array = []
    for (let i = 0; i < 4; i++) {
        let valido = true
        while (valido) {
            let val = 0
            let cadena = prompt(`Ingrese la cadena de ADN (maximo 7 bases) (${i+1})`).toUpperCase()
                for (let index = 0; index < cadena.length; index++) {
                    if (cadena[index] != "A"  && cadena[index] != "T" && cadena[index] != "C" && cadena[index] != "G" ) {
                    val+=1
                    }
                }
                if (val == 0 && cadena.length==7) {
                    valido = false
                    array.push(cadena)
                }  
        }
    }
    let A = 0
    let T= 0
    let G = 0
    let C = 0
    array.forEach(i => {
        for (let index = 0; index < i.length; index++) {
            if (i[index]== "A") {
                A++
            }
            if (i[index]== "C") {
                C++
            }  if (i[index]== "T") {
                T++
            }  if (i[index]== "G") {
                G++
            }         
        }
    });

    if (A>T && A>G && A>C) {
        return `La base que mas se repite es "A", y esta aparece ${A} veces`
    }else if (T>G && T>C){
        return `La base que mas se repite es "T", y esta aparece ${T} veces`
    }else if (G>C){
        return `La base que mas se repite es "G", y esta aparece ${G} veces`
    }else{
        return `La base que mas se repite es "C", y esta aparece ${C} veces`
    }
    
}

let prueba = baseRepetida()
console.log(prueba);