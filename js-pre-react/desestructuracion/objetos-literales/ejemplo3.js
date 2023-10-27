// DEFINIR VALOS POR DEFECTO solo serviria con undefined

const persona = {
    nombre: "Cinthya",
    edad: undefined,
    ciudad: "La mejor ciudad"
}

let{edad = 30} = persona

console.log(edad);