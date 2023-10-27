// SE UTILIZA PARA ITERAR ELEMENTOS DE UN ARREGLO Y EJECUTAR UNA FUNCION PARA CADA ELEMENTO
// -NO DEVUELVE UN NUEVO ARREGLO. TRABAJA SOBRE EL ORIGINAL

const frutas = ["Manzana", "Pera", "Platano"]

// EJEMPLO CON FUNCION DE FLECHA
frutas.forEach(fruta => {
    console.log(fruta);
});

// EJEMPLO CON UNA FUNCION CLASICA

frutas.forEach(function (fruta) {
    console.log(fruta);
});