// CONVERTIR UN ARREGLO DE NOMBRES EN UN ARREGLO DE SALUDOS

const nombres = ["Juan", "Maria", "Lucía"]

const saludos = nombres.map(nombre => {
    return `¡Hola ${nombre}!`
});

console.log("Arreglo de nombres", nombres);
console.log("Arreglo de saludos", saludos);