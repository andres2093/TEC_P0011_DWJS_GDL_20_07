const path = require('path')
const server = require(path.join(__dirname, '', 'server.js')) 
const fs = require('fs')

// console.log(__dirname);

//Asíncrono
// fs.writeFile(path.join(__dirname, '/ejemplo_1.txt'), 'Este es el contenido de mi archivo', {encoding: 'utf-8'}, (err) => {
//     if (err) throw err;
//     console.log('writeFile:','Archivo creado!');
//   });

// fs.readFile(path.join(__dirname, '/ejemplo_1.txt'), {encoding: 'utf-8'}, function (error, data) {
//     if (error) return console.error(error)
//     console.log('readFile:',data)
// })

// fs.appendFile(path.join(__dirname, '/ejemplo_1.txt'), '\nEsto es una nueva línea', (err) => {
//     if (err) throw err;
//     console.log('appendFile','Archivo actualizado!');
// });

//Síncrono
// fs.writeFileSync(path.join(__dirname, '/ejemplo_1.txt'), 'Este es el contenido de mi archivo', {encoding: 'utf-8'});
// console.log('writeFileSync:','Archivo creado!');

// data = fs.readFileSync(path.join(__dirname, '/ejemplo_1.txt'), {encoding: 'utf-8'})
// console.log('readFileSync:', data)

// fs.appendFileSync(path.join(__dirname, '/ejemplo_1.txt'), '\nEsto es una nueva línea');
// console.log('appendFile:','Archivo actualizado!');

//Reto 1
data = fs.readFileSync(path.join(__dirname, '/ejemplo_1.txt'), {encoding: 'utf-8'})

console.log(data);

let spaces = 0, lines = 0;
// data.map(c =>{
//     if(c === 10){
//         lines++
//     } else if(c === 32){
//         spaces++;
//     }
// })
for(i in data){
    if(data.charCodeAt(i) === 10){
        lines++
    } else if(data.charCodeAt(i) === 32){
        spaces++;
    }
}

console.log("Caracteres: " + data.length);
console.log("Lineas: " + lines);
console.log("Espacios: " + spaces);