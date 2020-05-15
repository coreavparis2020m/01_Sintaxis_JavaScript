// Objetos en JavaScript
// Declaraciones

// 1.- Mediante un literal de objeto

// {
//     propiedad1: valor,
//     propiedad2: valor,
//     ...
//     metodo1() {
//         // código a ejecutar
//     }
// }

let jugador1 = {
    nombre: 'Cristiano Ronaldo',   // Las propiedades son variables de objetos
    apellidos: 'Dos Santos Aveiro',
    dorsal: 7,
    equipos: ['Real Madrid','Manchester United'],
    golesTemporadaActual: 0,
    marcarGol() {
        this.golesTemporadaActual++;  // Los métodos son funciones de objetos
    }
}

console.log(jugador1);

// Acceso a propiedades de objetos (notación del punto)

console.log(jugador1.nombre);

jugador1.dorsal = 9;

console.log(jugador1);

// Acceso a la invocación de métodos del objeto (notación del punto)

jugador1.marcarGol();

console.log(jugador1);

// Se pueden añadir propiedades

jugador1.balonesOro = 4;

console.log(jugador1);

// 2.- Mediante una instancia de new Object

// new Object()

let jugador2 = new Object();
jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal = 10;
jugador2.golesTemporadaActual = 0;
jugador2.marcarGol = function () {
    this.golesTemporadaActual++;
}

console.log(jugador2);

jugador2.marcarGol();

console.log(jugador2);

// 3.- Mediante una función constructora

// function Identificador (parámetros) {
//     código para instanciar
//     el objeto con this
// }

function Jugador (nombre, apellidos, dorsal, golesTemporadaActual) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dorsal = dorsal;
    this.golesTemporadaActual = golesTemporadaActual;

    this.marcarGol = function () {
        this.golesTemporadaActual++;
        alert('¡Gol de ' + this.nombre + ' ' + this.apellidos + '!');
    }

}

let jugador3 = new Jugador('Sergio','Ramos', 4, 0);  // Objeto instancia de la función constructora Jugador
let jugador4 = new Jugador('Julio','Iglesias', '1', 0);

console.log(jugador4);

// jugador3.marcarGol();


// 4.- Mediante clases (ECMAScript 2015)

class Vehiculo {
    marca;
    modelo;
    color;
    stock = 10;

    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    ventaVehiculo() {
        this.stock--;
    }

    getColorVehiculo() {
        return this.color;
    }

    setColorVehiculo(color) {
        this.color = color;
    }
}

let vehiculo1 = new Vehiculo('Audi', 'A4', 'negro');

console.log(vehiculo1);

vehiculo1.ventaVehiculo();

console.log(vehiculo1);
console.log(vehiculo1.color);

let colorAudi = vehiculo1.getColorVehiculo();

console.log(colorAudi);

vehiculo1.setColorVehiculo('rojo');

console.log(vehiculo1);