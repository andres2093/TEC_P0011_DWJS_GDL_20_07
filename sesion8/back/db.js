const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/Product');
const Review = require('./models/Review');
const User = require('./models/User');
const Order = require('./models/Order');

// Database connection
const sequelize = new Sequelize(process.env.MARIADB_DATABASE, process.env.MARIADB_USER, process.env.MARIADB_PASSWORD, {
  host: process.env.MARIADB_HOST,
  port: process.env.MARIADB_PORT,
  dialect: process.env.DIALECT,
  logging: false,
});
 
// Getting models
const models = [
  Product,
  Review,
  User,
  Order,
];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

// Configuring relations
const { products, reviews, users, orders } = sequelize.models;
reviews.belongsTo(products); // Relation one-to-one in reviews table
orders.belongsTo(users); // Relation: Order has one user
orders.belongsTo(products); // Relation: Order has one product

module.exports = sequelize;