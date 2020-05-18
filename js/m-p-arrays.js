// Métodos y propiedades propios de JavaScript (built-in) para arrays

let frutas = ['manzanas','naranjas','kiwis'];

console.log(frutas.length); // número de elementos del array

// Métodos mutables (van a modificar el valor del array)

frutas.pop(); // elimina el último elemento

console.log(frutas);

frutas.push('albaricoques','cerezas'); // añade elementos al final

console.log(frutas);

frutas.shift() // extraer el primer elemento (y desplaza el resto)

console.log(frutas);

frutas.unshift('plátanos','fresas') // añade elementos al principio (y desplaza el resto)

console.log(frutas);

frutas.splice(1,3) // Elimina elementos desde ambas posiciones incluidas (El entero se
                   // se refiere a las posiciones y por tanto indexado a cero)

console.log(frutas);

frutas = ['manzanas','naranjas','kiwis'];

frutas.splice(1,1);

console.log(frutas);

frutas.splice(1,1, 'plátanos') // Sustituye el elemento en la posición indicada

console.log(frutas);

frutas.splice(1,0, 'Sandías'); // Añade el elemento desde la posición indicada

console.log(frutas);

frutas.sort(); // Ordena los elementos (lexicográfico  Aa0*)

console.log(frutas);

frutas.reverse() // Invierte el orden de todos los elementos

console.log(frutas);

// Los métodos JavaScript se pueden encadenar

let marcasVehiculos = ['Dacia','VW','SEAT','Audi','Renault'];

marcasVehiculos.sort().reverse();

console.log(marcasVehiculos);

// Métodos inmutables 

frutas = ['peras','naranjas','kiwis','fresas','plátanos','mandarinas'];

let frutasSelecionadas = frutas.slice(2,4); // Extraer elementos desde primera posición incluida
                                           // hasta segunda posición excluida

console.log(frutasSelecionadas);
console.log(frutas);

let hayPomelos = frutas.includes('pomelos');  // Devuelve boolean si existe o no el elemento
console.log(hayPomelos);

let mensajeFrutas = frutas.join(' 😍 '); // Une todos los elementos del array en un string
console.log(mensajeFrutas);

let marcasEuropeas = ['SEAT','Renault','Mercedes'];
let marcasAsiaticas = ['Toyota','Mazda'];

let marcas = marcasEuropeas.concat(marcasAsiaticas); // Unir elementos de los arrays en otro

console.log(marcas);
console.log(marcasEuropeas);
console.log(marcasAsiaticas);

// Paso por valor y por referencia en JavaScript

// Los tipos primitivos tiene su paso por valor

let a = 'Juan';
let b = a;
console.log(b);
b = 'Pedro';
console.log(b);
console.log(a);

// Los tipos no primitivos tienen su paso por referencia

let c = [1,2,3];
let d = c;

console.log(d);

c.push(4);
console.log(c);
console.log(d);

d.push(5);
console.log(c);
console.log(d);

// En el caso de arrays podemos romper el paso por referencia con concat

let marcasSeleccionadas = marcasEuropeas.concat();

marcasSeleccionadas.push('Peugeot','Ferrari');

console.log(marcasSeleccionadas);
console.log(marcasEuropeas);

// Operadores spread (...) ECMA 2015

let marcasCoreanas = ['KIA','Hyundai'];

marcasAsiaticas.push(...marcasCoreanas);
console.log(marcasAsiaticas);

// Parámetros rest (...) ECMA 2015

function setCategories(...categories) {
    return categories;
}

let shoesCategories = setCategories('running','men','uk');
console.log(shoesCategories);