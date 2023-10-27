// UTILIZAR EL "foreach" PARA REALIZAR UNA OPERACION MATEMATICA CON LOS VALORES DE UN ARRAY

const valores = [10, 20, 30, 40, 50]

let suma = 0

// El operador += nos ayuda a ir acumulando el valor
valores.forEach(valor => {
    suma += valor
});

console.log(suma);