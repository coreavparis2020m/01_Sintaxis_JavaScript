// Métodos y propiedades propios de JavaScript (built-in) para arrays de objetos

let jugadores = [
    {nombre: 'María', apellidos: 'Pérez', puntuacion: 4.6},
    {nombre: 'Juan', apellidos: 'Gómez', puntuacion: 7},
    {nombre: 'Laura', apellidos: 'López', puntuacion: 9.6}
];

console.log(jugadores[1]);
console.table(jugadores);

// Ciclo forEach (ECMA 2015)
// <array>.forEach((elem, i) => {
    // código a ejecutar con cada elemento
//})

jugadores.forEach(elem => {
    if (elem.puntuacion >= 5) {
        elem.apto = true;
    } else {
        elem.apto = false;
    }
});

console.log(jugadores);

// Ciclo Map (ECMA 2015)
// Devuelve un array con el resultado de cada iteracción
// <array>.map((elemento, índice) => {
    // código a ejecutar con cada elemento 
    // return
//})

let nombresJugadores = jugadores.map((elem, i) => {
    return (i + 1) + '.- ' + elem.nombre + ' ' + elem.apellidos + '.';
});

console.log(nombresJugadores);

// Versión con ciclo for (versión 'antigua')

// let nombresJugadores = []; // Inicializamos como array vacío para poder usar después push en el ciclo for

// for (i = 0; i < jugadores.length; i++) {
//     let nombreJugador = (i + 1) + '.- ' + jugadores[i].nombre + ' ' + jugadores[i].apellidos + '.'
//     nombresJugadores.push(nombreJugador);
// }

// console.log(nombresJugadores);

// Ciclo filter (ECMA 2015)
// Devuelve array con los elementos
// que cumplan una condición de filtro
// <array>.filter((elemento, indice) => {
    // return expresión condicional
// })

let jugadoresAptos = jugadores.filter(jugador => {
    return jugador.puntuacion >= 5;
});

console.log(jugadoresAptos);

// Ciclo Reduce (ECMA 2015)
// Recorre los valores y en cada ciclo de iteración
// actualiza (código) un valor de inicio y otro de valor de fin
// a partir de los valores de cada elemento

// <array>.reduce((inicio, fin) => {
    // código con inicio y fin
// })

jugadores[0].puntuacion = [4.5, 6.5, 7.8];
jugadores[1].puntuacion = [9.4, 3.5, 6.8];
jugadores[2].puntuacion = [7.5, 4.5, 7.9];



jugadores.forEach((jugador, i) => {
    let suma = jugador.puntuacion.reduce((a, b) => {
        return a + b;
    });
    jugador.promedio = suma / jugador.puntuacion.length;
});

console.log(jugadores);

