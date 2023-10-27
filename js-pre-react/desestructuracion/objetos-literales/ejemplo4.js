

const persona = {
    nombre: undefined,
    edad: 19,
    ciudad: "La mejor ciudad",
    direccion: {
        Calle: "123 Calle principal",
        colonia: "colonia bonita",
    }
}

// DESESTRUCTURACION ANIDADA

const {nombre = "Luna", direccion: {Calle, colonia}} = persona

console.log(Calle, colonia);