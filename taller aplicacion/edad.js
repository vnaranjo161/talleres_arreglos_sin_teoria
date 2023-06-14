/*5. Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de
edad. */

function mayoresEdad(n) {
    let edades = []
    let nombres = []
    let mayores = []
    for (let index = 0; index < n; index++) {
        let nombre = prompt("Ingrese su nombre")
        let edad =  parseInt(prompt("Ingrese su edad: "))
        edades.push(edad)
        nombres.push(nombre)
    }
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >=18) {
            mayores.push(nombres[i])
        }        
    }
    console.log(`Hay ${mayores.length} personas mayores edad, estos son:\n ${mayores}`);
}

mayoresEdad(5);