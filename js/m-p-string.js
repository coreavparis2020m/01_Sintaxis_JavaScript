// Métodos y propiedades propios de JavaScript (built-in) para strings

let nombre = 'Juan';

console.log(nombre.length); // devuelve longitud (nº caracteres)
console.log(nombre.toLowerCase()); // devolver en minúsculas
console.log(nombre.toUpperCase()); // devolver en mayúsculas
console.log(nombre.charAt(2)); // devuelve el caracter en la posición que se le pase (indexado a cero)
console.log(nombre.indexOf('n')); // devuelve la posición de un caracter
console.log(nombre.indexOf('k')); // si no existe devuelve -1

nombre = 'Amanda';

console.log(nombre.lastIndexOf('a')) // devuelve la posición del último caracter pasado
console.log(nombre.includes('x')) // devuelve true si la cadena tienen el caracter pasado
console.log(nombre.startsWith('A')) // devuelve true si la cadena comienza por el caracter pasado
console.log(nombre.endsWith('a')) // devuelve true si la cadena finaliza por el caracter pasado

let apellidos = 'Pérez Gómez';

let nombreCompleto = nombre.concat(' ' + apellidos); // concatena la expresión que se le pase

console.log(nombreCompleto);

let frase = '       En un lugar de La Mancha...         '; // Elimina espacios en blanco al inicio y final
console.log(frase.trim());

console.log(apellidos.repeat(4)); // repite la cadena las veces que se le pase

let cadena = '01234abcde';

console.log(cadena.slice(2, 5)); // devuelve fragmento desde el primer argumento (incluido)
                                // hasta el segundo argumento (excluido)
console.log(cadena.slice(-2));   // si se le pasa un solo argumento negativo devuelve
                                // los n últimos caracteres pasados

// Template literals (nueva sintaxis para cadenas de ECMA 2015)
// Escribir cadenas multilínea sin secuencia de escape
// Permite interpolar variables o constantes

// Sintaxis

// let identificador = ` ... caracteres   ${expresion}  
//                       ...
//                      `

let puntuacion = 0.87;

let mensaje = `La jugadora ${nombre} ${apellidos} tiene un  ${puntuacion * 100}  %.`;
console.log(mensaje);