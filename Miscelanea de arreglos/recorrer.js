/*3. Dado el siguiente arreglo let aux = [10, true, "k200", 20.7] , imprimir todos sus elementos usando la
operacion de recorrido con foreach */
let aux = [10, true, "k200", 20.7]
aux.forEach(i => {
    console.log(i);
});

/* 4. Dado el siguiente arreglo let k = [17, 4, 64, 79, 109, 112] , recorrer cada elemento con foreach e
imprimir los elementos que sean números impares */
let k = [17, 4, 64, 79, 109, 112] 
k.forEach(i => {
    if (i%2==0) {
        console.log(i);
    }
});




/*10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para
inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la
palabra adso. */
let array = ["z", "p", "s", "z", "o", "b", "a", "w", "d"]
let adso = [a=0, d=0, s=0, o=0]
for (let index = 0; index < array.length; index++) {
    array = array
    if (array[index] == "a") {
        adso[0]++
    }
    if (array[index] == "d") {
        adso[1]++
    }
    if (array[index] == "s") {
        adso[2]++
    }
    if (array[index] == "o") {
        adso[3]++
    }
}
if (adso[0]!=0 && adso[1]!=0 && adso[2]!= 0 && adso[3]!=0){
    console.log(`Con el arrego si es posible formar la palabra adso`);
} else {
    console.log(`Con el arrego no es posible formar la palabra adso`);

}

/*11. Dado el arreglo [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] use ciclo for para mostrar la tabla del 5 del */
let array2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let index = 0; index < array2.length; index++) {
    console.log(5*array2[index]);    
}

/* 12. Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos forEach(una dentro del otro) para determinar
consecutivos si a + 1 = b, p.e. 10 y 11 son consecutivos porque 10 + 1 = 11, 20 y 21 son consecutivos
porque 20 + 1 = 21. */

let array3 = [5, 7, 90, 2, 5, 3, 8, 99]
array3.forEach(i => {
    array3.forEach(j => {
        if (i + 1 == j) {
            console.log(`Los numeros del arreglo "${i}" y "${j} son consecutivos" `);
        }
    });
});




