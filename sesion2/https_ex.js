const https = require('https');
const fs = require('fs')
const path = require('path')

function descargarImagen(url, imageName) {
    let file = fs.createWriteStream(path.join(__dirname, '', imageName + ".png"));
    https.get(url, function(response) {
        response.pipe(file)
    })
}

function getAPOD() {
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
      let data = '';
    
      resp.setEncoding('utf8');
      //trozos de información recibida
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      // La respuesta completa ha sido recibida. Imprime el resultado
      resp.on('end', () => {
        let body = JSON.parse(data);
        console.log(' Título:',body.title);
        console.log('\n Explicación', body.explanation);
        console.log('\n URL:', body.url);

        descargarImagen(body.url, body.title);
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

getAPOD()