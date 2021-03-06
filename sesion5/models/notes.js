module.exports = (sequelize, type) => {
    return sequelize.define('Note', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        heading: type.STRING,
        content: type.TEXT,
    })
}