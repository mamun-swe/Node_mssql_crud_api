
const Sequelize = require("sequelize")
const dbConfig = require("../config/db.config")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.students = require("./student.model")(sequelize, Sequelize)

module.exports = db