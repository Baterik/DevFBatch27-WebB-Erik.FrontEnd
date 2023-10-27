// CREAR UN ARREGLO DE LAS LONGITUDES DE LAS PALABRAS DE OTRO ARREGLO

const palabras = ["Linterna", "Llanta", "gato", "refaccion"]

const longitudPalabras = palabras.map(palabra => {
    return `${palabra} - Tiene ${palabra.length} letras ` 
});

console.log(palabras);
console.log(longitudPalabras);


