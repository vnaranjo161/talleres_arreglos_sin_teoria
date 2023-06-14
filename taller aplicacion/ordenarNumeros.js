function ordenarNumeros() {
    let numeros = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de números que desea ingresar"));
  
    for (let index = 0; index < cantidad; index++) {
      let pedir = true;
      while (pedir) {
        let numero = parseInt(prompt(`Ingrese el número (${index + 1}) de ${cantidad}`));
        if (!numeros.includes(numero)) {
          pedir = false;
          numeros.push(numero);
        }
      }
    }
    let numerosOrdenados = [];
    while (numeros.length > 0) {
        let menor = numeros[0];
        let indiceMenor;
        for (let i = 0; i < numeros.length; i++) {
          if (numeros[i] < menor) {
            menor = numeros[i];
            indiceMenor = i;
          }
        }
        numerosOrdenados.push(menor);
        numeros.splice(indiceMenor, 1);
    }

    let mensaje = `Los numeros ordenados son: \n ${numerosOrdenados}`
    return mensaje;
  }
  
  let prueba = ordenarNumeros();
  console.log(prueba);
  