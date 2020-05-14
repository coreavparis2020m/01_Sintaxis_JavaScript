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

// Operadores de asignación 

// =

// Asignación de adición +=

let puntuacion1 = 4;
let puntuacion2 = 9;

puntuacion1 += puntuacion2 ; // puntuacion1 = puntuacion1 + puntuacion2

// -=  *=  /=  %=

// Operadores de comparación 

// Operador de igualdad ==

let ciudad = 'Cáceres';
let termino = 'Cáceres';

let hayCoincidencia = ciudad == termino;

console.log(hayCoincidencia);

// Operador de igualdad estricta === (mismo valor y mismo tipo de dato)

let puntuacion3 = 8.4;
let puntuacion4 = '8.4';

hayCoincidencia = puntuacion3 === puntuacion4; // devolverá false

console.log(hayCoincidencia);

// Operador de desigualdad !=

// Operador de desigualdad estricta !== 

// Operador Mayor que >

let puntuacion5 = 8.4;
let puntuacion6 = 3;

hayCoincidencia = puntuacion5 > puntuacion6;

console.log(hayCoincidencia);

// Operador Menor que <

// Operador Mayor o igual que >=          

// Operador Menor o igual que <=

// OPERADORES LÓGICOS

// Operador Lógico AND &&
// Comparar dos expresiones y devuelve true si las dos expresiones son true

let valor1 = 12;
let valor2 = 14;
let valor3 = 12;

let resultado2 = valor2 < valor1 && valor1 === valor3;

console.log(resultado2);


// Operador Lógico OR ||

let mayorEdad = true;

resultado2 = mayorEdad || valor1 !== valor3;

console.log(resultado2);

// Operador Lógico NOT !

mayorEdad = false;

mayorEdad = !mayorEdad;

console.log(mayorEdad);

// Operador condicional (ternario) *Tiene tres operandos

// expresiónDeCondición ? valor1 : valor2

let estado;
let edadAlumno = 14;

estado = (edadAlumno >= 18) ? 'Adulto' : 'Menor';

console.log(estado);

