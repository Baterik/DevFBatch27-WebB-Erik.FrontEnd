// LA DESESTRUCTURACION DE OBJETOS LITERALES EN JS, TE PERMITE EXTRAER PROPIEDADES DE UN OBJETO Y ASIGNARLA A VARIABLES/CONSTANTES INDIVIDUALES DE MANERA MAS CONVENIENTE

const persona = {
    nombre: "Cinthya",
    edad: 20,
    ciudad: "La mejor ciudad"
}

// DESESTRUCTURACION
let {nombre, edad, ciudad} = persona

console.log(nombre);