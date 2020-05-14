// Estructura condicional if 

// if ( expresiónDeCondición ) { 
//      código a ejecutar
// }

let nombre = 'Manuel';
let edad = 20;
let mayorEdad;

if (edad >= 18 && nombre !== undefined) {
    mayorEdad = true;
    console.log(nombre + ' es mayor de edad');
}

// Estructura condicional if else

// if ( expresiónDeCondición ) { 
//      código a ejecutar si se cumple
// } else {
//      código a ejecutar si no se cumple
// }

edad = 14;

if (edad >= 18 && nombre !== undefined) {
    mayorEdad = true;
    console.log(nombre + ' es mayor de edad');
} else if (nombre !== undefined) {
    console.log(nombre + ' es menor de edad');
} else {
    console.log('Datos no disponibles');
}

// Estructura condicional swith case

// switch (expresion) {
//     case caso1:
//         código a ejecutar
//         break;
//     case caso2:
//         código a ejecutar
//         break;
//     ...
//     default
//         código a ejecutar en caso de no coincidencia
// }


let diaSemana = 7;

switch (diaSemana) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    default:
        console.log('Los fines de semana no trabajamos');
}

// Estructuras Iterativas

// Estructura iterativa For

// for (valor inicial; condición; actualización) {
//     código a ejecutar mientras se cumpla la condición
// }

for (i = 0; i < 10; i++) {
    console.log('En cada iteración i tendra el valor ' + i);
}

// Estructura iterativa While

// while (condicion) {
//     Código a ejecutar mientas se cumpla la condición
// }

let password;

// while (password !== '1234') {
//     password = prompt('Escriba su contraseña');
// }

// Estructura iterativa While

// do {
//     Código a ejecutar mientas se cumpla la condición
// } while (condicion)

do {
    password = prompt('Escriba su contraseña');
} while (password !== '1234');