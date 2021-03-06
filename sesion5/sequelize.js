const Sequelize = require('sequelize');
const NoteModel = require('./models/notes');

const sequelize = new Sequelize('dev', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

const Note = NoteModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => console.log("Tablas creadas"))

module.exports = {
    Note
}