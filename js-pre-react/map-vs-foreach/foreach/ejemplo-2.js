// MODIFICANDO EL ARRAY ORIGINAL

const numeros = [1,2,3,4,5]

// CADA "FOREACH", EN LA FUNCION QUE PIDE COMO PARAMETRO, A SU VEX, ESA FUNCION PUEDE RECIBIR 3 ARGUMENTOS: MediaElementAudioSourceNode, INDICE, ARRAY COMPLETO

console.log("Original", numeros);

numeros.forEach((numeroActual, indice, arregloCompleto) => {
    // console.log(`${indice}.-${numeroActual}===${arregloCompleto}`);
    arregloCompleto[indice] = numeroActual * 2
});

console.log("original modificado", numeros);

