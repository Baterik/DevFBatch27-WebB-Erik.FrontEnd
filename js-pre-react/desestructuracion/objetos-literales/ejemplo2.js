// DARLE UN ALIAS A LAS PROPIEDADES QUE SE DESESTRUCTURAN

const persona = {
    nombre: "Cinthya",
    edad: 20,
    ciudad: "La mejor ciudad",
}

const nombre = "Laura"

// para acceder a la propiedad de nombre donde ya existe una const nombre, se debe colocar lo sig.
let {nombre: nombreCompleto} = persona

console.log(nombreCompleto);