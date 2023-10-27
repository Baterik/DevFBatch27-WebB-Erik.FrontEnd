// CREAR UNA PROMESA Y CONSUMIRLA PARA LLEVAR UN HELADO A
// UN AMIGO SI LA HELADERIA ESTA ABIERTA

let heladeriaAbierta = true
// FORMAS DE TRABAJAR LAS PROMESAS
// 1. CREAR LAS REGLAS DE LA PROMESA

const traerHelado = new Promise(function (resolve, reject) {
    // LOGICA DE LA PROMESA
    if (heladeriaAbierta) {
        resolve("Ten, te traje un helado porque estaba abierta la heladeria")
    }else{
        reject("No te traje helado porque estaba cerrada la heladeria")
    }
})

// 2. RECIBIR PROMESAS COMO RESPUESTA
traerHelado.then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.error(error);
})