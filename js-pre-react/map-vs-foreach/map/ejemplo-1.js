// ESTE METODOSE UTILIZA PARA CREAR UN NUEVO ARREGLO A PARTIR DE OTRO, APLICANDO UNA FUNCION A CADA ELEMENTO DEL ARRAY ORIGINAL

const numeros = [1, 2, 3, 4, 5]

const numerosDuplicados = numeros.map(numero => {
    // otros codigos o logica...
    return numero * 2
});

console.log("Arreglo original", numeros);
console.log("Copia del arreglo original", numerosDuplicados);