// Métodos y propiedades propios de JavaScript (built-in) para numbers

// Parseo de string a number

let resultado = '9.7';

// resultado = parseInt(resultado);Devuelve la parte entera convertida a tipo number
console.log(resultado); 

resultado = parseFloat(resultado); // Convertir a tipo number
console.log(resultado); 

// Parseo de number a string

let puntuacion = 9;
puntuacion = puntuacion.toString();
console.log(typeof puntuacion);

// Objeto Math

let puntuacion2 = 2.6; // Ojo para redondear hay que cambiar de signo a los negativos

let puntuacion3 = 2.1;

let puntuacionFinal = Math.round(puntuacion2); // devuelve el redondeo del valor
console.log(puntuacionFinal);

let puntuacionSuelo = Math.floor(puntuacion2) // devuelve el redondeo a suelo
console.log(puntuacionSuelo);

let puntuacionTecho = Math.ceil(puntuacion3) // devuelve el redondeo a techo
console.log(puntuacionTecho);


