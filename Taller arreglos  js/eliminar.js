//3. Use splice para hacer las eliminaciones correspondientes:

//a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
let arr1 = [1, 2, false]
arr1.splice(2,1)
console.log(arr1);

//b)Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
let arr2 = [99, false, 17, 45, 7, "abc", 78]
arr2.splice(6,1)
console.log(arr2);

//c) Dado el arreglo [-1, -55, -89- 30, 1000] Elimine el elemento de índice 1
let arr3 = [-1, -55, -89, -30, 1000]
arr3.splice(1,1)
console.log(arr3);

/* d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta el
índice 4 en un sólo llamado */
let arr4 = ["zxc", 767, 1298, true, false, [3], 1]
arr4.splice(1,4)
console.log(arr4);

/* e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en un
sólo llamado */
let arr5 = [34, ["q"], 67, 1, 99, 1/2]
arr5.splice(3,4)
console.log(arr5);