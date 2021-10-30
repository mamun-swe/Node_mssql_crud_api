
module.exports = {
    HOST: "localhost",
    PORT: "1433",
    USER: "SA",
    PASSWORD: "Mamun@166009",
    DB: "testDB",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}