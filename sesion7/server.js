// npm i helmet cors bcrypt jsonwebtoken

// ./node_modules/.bin/sequelize migration:create --name CreateTableUsers

// ./node_modules/.bin/sequelize db:migrate

const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet()); // Basic configuration for helmet
app.use(cors()) // Basic configuration for enable CORS

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(3000, () => {
  console.log(`Express on port 3000`);
});