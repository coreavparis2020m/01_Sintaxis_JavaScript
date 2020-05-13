
console.log('¡Hola Mundo!'); // Comentarios en línea JavaScript

/* Comentarios en
bloque  */

// Características de la sintaxis

// - Ignora los espacios en blanco.
// - Es case-sensitive (Distingue mayúsculas de minúsculas).
// - Las instrucciones y sentencias finalizan con punto y coma (ASI). 

// Variables

// Declaración de variables

// Con la palabra reservada var

var edad; // No se define el tipo de dato

// Identificador
//     - Tiene que comenzar por vocal, $ o _
//     - (Buena práctica) se utiliza camelCase (primerApellido)
//     - (Buena práctica) utilizar nombres semánticos

// Con la palabra reservada let

let primerApellido;

// Declaración global (exige inicializar la variable) Mala práctica

direccion = 'Av. Paris, 26 Cáceres'; 

console.log(direccion);

direccion = 'Plaza de Colón, 2 Cáceres';

console.log(direccion);

// Declarar e inicializar

var localidad = 'Cáceres';

// Declarar varias variables a la vez (,)

let email, 
    telefono, 
    codigoPostal;

// Constantes (valor que no se modifica en la ejecución del programa)

const urlPedidos = 'https://192.35.48.79/pedido';

// urlPedidos = 'Otra url...'; devolverá error

// Alternativa 'clásica' a las constantes

var URL_PEDIDOS = 'https://192.35.48.79/pedido'; // Anterior a ECMA5

// Tipos de datos

// Tipos de datos primitivos

// string o cadenas de caracteres alfanuméricos

let ciudad = 'Ciudad de \n Madrid'; // Comillas simples o dobles

let calle = 'O\'Donell 37'; // Secuencia de escape 

console.log(ciudad, calle);

// numbers

let resultado = 8.6;  //cualquier tipo (.) para los decimales

// boolean

let mayorEdad = false; // true ó false

// Undefined

let marca; // valor-tipo de dato

console.log(marca);

// Null

marca = null; // valor-tipo de dato

console.log(marca); 

// Tipos de dato Object

// Objetos

// Arrays

// JavaScript tipado débil y dinámico

let talla = "UK9"; // El tipo de dato es inferido (débil)

console.log(typeof talla);  // Propiedad para averiguar el tipo de dato de la variable

talla = 38; // Podemos cambiar el tipo de dato (dinámico)

console.log(typeof talla);


