// DESESTRUCTURACION PARA OBJETOS COMO "PROPS" PARAMETROS

function imprimirInfo(persona) {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
}

const persona = {
    nombre: "Erik",
    edad: 42,
    ciudad: "Ragnarok",
}

imprimirInfo(persona)

// PARA SIMPLIFICAR EL CODIGO SE PUEDE ELIMINAR ACCEDER A persona. ESPECIFICANDO EN LOS PARAMETROS LAS PROPIEDADES
function imprimirInfo({nombre, edad}) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const persona1 = {
    nombre: "Diego",
    edad: 20,
    ciudad: "Ragnarok",
}

imprimirInfo(persona1)

// EN ESTE CacheStorage, ESTAMOS PASANDO UN OBJETO COMO ARGUMENTO A LA FUNCION "imprimirInfo" Y LUEGO DESESTRUCTURAMOS EL OBJETO DIRECTAMENTE EN LOS PARAMETROS DE LA FUNCION PARA ACCEDER A LAS PROPIEDADES DENTRO DE LA FUNCION