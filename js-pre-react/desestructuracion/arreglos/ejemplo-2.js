// OMISION DE VALORES
const arreglo = [1,2,3,4,5]

// DESESTRUCTURACION CON OMISION DE VALORES NO DESEADOS

const [primerValor, segundoValor, , , quintoValor] = arreglo
console.log(quintoValor);

// accidiendo al valor 3 del arreglo
console.log(arreglo[2]);