// Operadores

// operando1 operador operando2 (binarios)

// operando operador (unarios)

// Operadores aritméticos

// + y -

let resultado = 6;

let puntuacion = resultado - 2; // El 2 lo empleamos como literal

console.log(puntuacion);

puntuacion = resultado + 4; 

console.log(puntuacion);

// El operador suma se utiliza también para concatenar (strings)

let nombre = 'Laura';
let mensaje;

mensaje = '¡Bienvenid@ ' + nombre + '!';

console.log(mensaje);

// Inferencia de tipos si los tipos son distintos

let edad = 30;

mensaje = nombre + ' tiene ' + edad + ' años.'; // Convierte el tipo para resolver
                                                // la expresión
console.log(mensaje);

// * y /

let a = 10;
let b = 2;

resultado = a / b;
console.log(resultado);

// Valor NaN (not a number)

a = 'Hello';

resultado = a * b;
console.log(resultado);

// Resto %

let ejemploResto = 13 % 2;
console.log(ejemploResto);

// Incremento ++ (suma de uno en uno)

let i = 1;

console.log(i++);  // Después de la variable
console.log(i);

let j = 10;

console.log(j);
console.log(++j); // Antes de la variable

// Decremento --

let k = 20;

console.log(--k);

// Negación unaria

let m = 4;

let n = -m;

console.log(n);

// Precedencia de operaciones

// de derecha a izquierda e igual matemáticas

let operacion = 12 + 3 * 8;

console.log(operacion);

let operacion2 = (12+ 3) * 8;

console.log(operacion2);