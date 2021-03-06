const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/Product');
const Review = require('./models/Review');
const User = require('./models/user');

// Database connection
const sequelize = new Sequelize('ecommerce', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

// Getting models
const models = [
  Product,
  Review,
  User,
];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

// Configuring relations
const { products, reviews } = sequelize.models;
reviews.belongsTo(products); // Relation one-to-one in reviews table

module.exports = sequelize;