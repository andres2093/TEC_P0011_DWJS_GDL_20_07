const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
    return res.send('Bienvenido a mi api')
})

app.use('/api', require('./routes'))

app.listen(3000, () => {
    console.log('localhost:3000');
})

// localhost:3000/api/notes