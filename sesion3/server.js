function saludar(nombre) {
    console.log('Hola', nombre);
}

function entrada(nombre, callback) {
    callback(nombre);
}

// entrada('Andres', saludar);

function ejecutar(call1, call2, call3) {
    call1(call2, call3);
}

function primero(call1, call2) {
    setTimeout(() => {
        console.log("Soy el 1");
        call1();
        call2();
    }, 1000);
  }
  
  function segundo() {
    console.log("Soy el 2");
  }
  
  function tercero() {
    console.log("Soy el 3");
  }
  
//   primero(segundo, tercero);
//   segundo();
//   tercero();

///////////////////////
// Reto 1
const https = require('https');

function ordenar(res) {
    console.log(res[0].films.length);
    console.log(res[0].name);

    res.sort((a, b) => a.films.length > b.films.length)
    res.sort((a, b) => b.name.localeCompare(a.name))

    console.log(res[0].films.length);
    console.log(res[0].name);
}

function ejecutarWs(callback) {
    https.get('https://swapi.dev/api/people/', (resp) => {
      let data = '';
    
      resp.setEncoding('utf8');
      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        let body = JSON.parse(data);
        callback(body.results)
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

// ejecutarWs(ordenar);

/// Promesas
// let promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let numero = Math.random();
//       console.log(numero);
//       if (numero >= 0.5) resolve("Éxito");
//       reject("Error");
//     }, 2000);
// });
// promesa
//     .then((data) => console.log(data))
//     .catch((data) => console.log(data));

// console.log("Inicio");

/// Lectura de archivo

const fs = require('fs');

function readFile(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (error, data) => {
            if(error) return reject(error);
            return resolve(data);
        })
    })
}

// readFile('./archivo.txt')
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

//All
let prom1 = new Promise((res, rej) => {
    setTimeout(res, 1000, "1");
});
let prom2 = new Promise((res, rej) => {
    setTimeout(res, 2000, "2");
});
let prom3 = new Promise((res, rej) => {
    setTimeout(res, 3000, "3");
});

Promise.all([prom1, prom2, prom3])
    .then(response => console.log(response))
    .catch(err => console.log(err))


//All lectura de archivos
// Función de utilidad para crear una promesa por conseguir el contenido de un
// archivo de forma asíncrona.
let obtenerArchivo = function (archivo) {
    return new Promise(function (resolve, reject) {
      fs.readFile(__dirname + "/" + archivo, "utf-8", function (err, datos) {
        if (err) {
          return reject(err);
        }
        datos = datos.replace(/\r?\n/g, "");
        resolve(datos);
      });
    });
  };
  
  console.log("Promesas inicializadas.");
  
//   let files = Promise.all([
//     obtenerArchivo("archivo1.txt"),
//     obtenerArchivo("archivo2.txt"),
//     obtenerArchivo("archivo3.txt"),
//   ]);
  
//   // Mostrar los archivos que fueron leídos exitosamente
//   files.then(function (collection) {
//     console.log("Promesas completadas:");
  
//     collection.forEach(function (datos, i) {
//       console.log("Archivo " + (i + 1) + ":", datos);
//     });
//   });

//Async/Await
function obtenerPokemon(pokemon) {
    return new Promise((resolve, reject) => {
      https
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (resp) => {
          let datos = "";
  
          resp.on("data", (chunk) => {
            datos += chunk;
          });
  
          resp.on("end", () => {
            datos = JSON.parse(JSON.stringify(datos))
            resolve(datos);
          });
        })
        .on("error", (err) => {
          reject(err.message);
        });
    });
  }

  const pokemones = [
    "bulbasur",
    "charmader",
    "squirtle",
    "pidgey",
    "pikachu",
    "rattata",
    "alakazam",
    "onix",
    "mew",
    "wigglytuff",
  ];

  async function atraparPokemones(pokemones) {
    try {
      let resultados = await Promise.all(
        pokemones.map(async (pokemon) => {
          let resultado = await obtenerPokemon(pokemon);
          console.log(`Pokemon atrapado ${pokemon}`);
          return resultado;
        })
      );
      return resultados
    } catch (error) {
      console.error("Error", error);
    }
  }

//   atraparPokemones(pokemones).then()

function obtenerPersonaje(character) {
    return new Promise((resolve, reject) => {
      https
        .get(`https://rickandmortyapi.com/api/character/?name=${character}`, (resp) => {
          let datos = "";
          resp.on("data", (chunk) => {
            datos += chunk;
          });
          resp.on("end", () => {
            datos = JSON.parse(datos)
            resolve(datos);
          });
        })
        .on("error", (err) => {
          reject(err.message);
        });
    });
  }
  const characters = [
    "Michael Jackson",
    "Rick",
    "Evil Morty",
    "Slippy"
];
  async function regresarPersonajes(characters) {
    try {
      let resultados = await Promise.all(
        characters.map(async (character) => {
          let resultado = await obtenerPersonaje(character);
          console.log(`Personaje ${character}`);
          return resultado;
        })
      );
      return resultados
    } catch (error) {
      console.error("Error", error);
    }
  }
  regresarPersonajes(characters).then()