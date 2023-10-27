// EN JS, LAS PROMESAS SON OBJETOS QUE REPRESENTAN UN VALOR QUE
// PUEDE ESTAR DISPONIBLE EN UN TIEMPO INDEFINIDO, POR NATURALEZA
// SON ESTRUCTURAS ASINCRONAS

// un objeto es la instancia de una Clase, cuya regla es que la primer letra es mayuscula, para instanciar una clase se hace con la palabra "new"
// 1. PODEMOS CREAR UNA PROMESA ES ESTABLECER LAS REGLAS QUE SE VAN A CUMPLIR
// POR UNA FUNCION CON PARAMETROS

const promesa = new Promise(function (resolve, reject){
// LAS PROMESAS CONTIENEN 2 METODOS
    resolve()
    reject()
})

// 2. PODEMOS CONSUMIR UNA PROMESA
promesa.then(function (response) {
    console.log(response);
}) .catch(function (error) {
    console.error(error);
})
