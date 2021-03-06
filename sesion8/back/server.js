
// npm i dotenv mariadb

// ./node_modules/.bin/sequelize db:migrate

// JWT_EXPIRESIN 36000
// JWT_SECRETKEY secretkey
// MARIADB_DATABASE ecommerce
// MARIADB_HOST mariadb-22247-0.cloudclusters.net
// MARIADB_PASSWORD bixolig676Ltr
// MARIADB_PORT 22272
// MARIADB_USER root
// DIALECT=mysql

require('dotenv').config(); // Configuring dotenv
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet()); // Basic configuration for helmet
app.use(cors()) // Basic configuration for enable CORS

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(process.env.PORT, () => {
  console.log(`Express on port ${process.env.PORT}`);
});