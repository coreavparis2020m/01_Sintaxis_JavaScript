// Métodos y propiedades propios de JavaScript (built-in) para fechas

// Obtenemos o generamos fechas de instancias del objeto Date

// Para obtener la fecha actual se usa una instancia sin pasar argumentos

let fechaActual = new Date();
console.log(fechaActual);
console.log(typeof fechaActual) // El tipo de las fechas es objeto

// Establecer una fecha new Date(año, mes, dia, hora, minuto, segundos, milisegundos)

let fechaNacimiento = new Date(73, 11, 18); // Los meses van indexados a cero
console.log(fechaNacimiento);

let fechaAlta = new Date(2020, 0, 1); // Años diferentes al siglo XX añadir cuatro dígitos
console.log(fechaAlta);

// Establecer una fecha new Date(fecha-string)

let fechaExpedicion = new Date('2020-01-15'); // Los meses no van indexados a cero
console.log(fechaExpedicion);

// Establecer una fecha new Date(milisegundos desde Fecha Epoch)

let fechaHoy = new Date(1589539604302);
console.log(fechaHoy);

// Métodos 'get'

console.log(fechaActual.getFullYear()); // devolver año
console.log(fechaActual.getMonth()); // devuelve el mes (indexado a cero)

let meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

let mesActual =  meses[fechaActual.getMonth()];
console.log(mesActual);    

console.log(fechaActual.getDate()); // devuelve el dia del mes
console.log(fechaActual.getHours()); // devuelve horas 
console.log(fechaActual.getMinutes()); // devuelve minutos
console.log(fechaActual.getSeconds()); // devuelve segundos
console.log(fechaActual.getMilliseconds()); // devuelve milisegundos

console.log(fechaActual.getDay()); // día de la semana

console.log(fechaActual.getTime());  // milisegundos desde Epoch

let fechaVencimiento = new Date(fechaActual.getTime() + 3 * 24 * 60 * 60 * 1000);
console.log(fechaVencimiento);