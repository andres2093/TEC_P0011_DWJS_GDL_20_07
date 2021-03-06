// var MATEMATICAS = require('LIBRO_DE_MATEMATICAS');
// var FISICA      = require('LIBRO_DE_FISICA');
// var QUIMICA     = require('LIBRO_DE_QUIMICA'); 

// var os = require('os');

// var cpus = os.cpus()

// console.log(cpus);

// var moment = require("moment")

// var now = moment();

// console.log(`Hoy es ${now}`);

// var operacion = require('./operaciones')
// operacion.sumar(2, 3)
// operacion.restar(2, 3)

// let lista = [];

// for (let i = 0; i < 30000; i++) {
//     lista.push(operacion.random(i, 100, 2));
// }

// console.log(lista);

// // Burbuja
// for (let k = 1; k < lista.length; k++) {
//     for (let i = 0; i < (lista.length - k); i++) {
//         if (lista[i] > lista[i + 1]) {
//             aux = lista[i];
//             lista[i] = lista[i + 1];
//             lista[i + 1] = aux;
//         }
//     }
// }
// console.log("Burbuja");
// console.log(lista);

// //Casilleros
// const l = lista.length;
// let j, temp;

// for ( let i = 1; i < l; i++ ) {
//     j = i;
//     temp = lista[ i ];
//     while ( j > 0 && lista[ j - 1 ] > temp ) {
//         lista[ j ] = lista[ j - 1 ];
//         j--;
//     }
//     lista[ j ] = temp;
// }

// console.log("Casilleros");
// console.log(lista);