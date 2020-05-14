// Sintaxis de declaración de funciones

// function nombreFuncion (parametros) {
    // código que ejecuta la función
    // return resultado de la función
// }

function suma (a, b)  {
    console.log(a + b);
}

function division (a, b) {
    let  c = a / b;
    return c; // última línea
}

//  Sintaxis de invocación

// nombreFuncion(argumentos)

suma(3,5);

let resultado = division(10, 5);
console.log(resultado);

// Funciones anónimas (se declaran e invocan al mismo tiempo)

let cuadrado = function (a) {
    return a * a;
}

console.log(cuadrado(5));

// Funciones flecha  ES6 (ECMAScript 2015)

// let cubo = (a) => {
//     return a * a * a;
// }

// Si sólo tenemos una línea de código permite eliminar return

// let cubo = (a) => {
//     a * a * a;
// }

// Si sólo tenemos un parámetro permite eliminar los paréntesis

// let cubo = a => {
//     a * a * a;
// }

// Si sólo tenemos una línea de código podemos eliminar las llaves

let cubo = a => a * a * a;

console.log(cubo(2));

// Ámbito de las variables y constantes

// Ámbito de las variables declaradas con var
// es el de la función más próxima

function mayorEdad (edad) {
    if (edad >= 18) {
        var adulto = true;
    } else {
        var adulto = false;
    }
    console.log(adulto);
    var nombre = 'Pepe';
}

mayorEdad(40);
// console.log(nombre); arroja error de excepción

// Ámbio de las variables declaradas con let o constantes con const
// será el del bloque de código más próxima
// *bloque puede ser estructura o función

function setPuntuacion (puntuacion) {
    if (puntuacion >= 5) {
        let apto = true;
        console.log(apto);
    } else {
        let apto = false;
        console.log(apto);
    }
    // console.log(apto); arroja error de excepción
}
setPuntuacion(3);

// Ámbito de las variables globales es
// todo el programa (considerado mala práctica)

function triangulo (a, b) {
    area = 0.5 * a * b;
}

triangulo(2,4);
console.log(area);



