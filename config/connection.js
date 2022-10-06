const Sequelize = require('sequelize')

//We use sequelize and .env to protect mysql password(required)

//.env file should contain DB_NAME = "name of database" DB_USER = "mysql user" DB_PW = "mysql password"
const sequelize = process.env.CARSDB_URL
  ? new Sequelize(process.env.CARSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

module.exports = sequelize;

// const mysql = require('mysql2');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'cars'
// });

// module.exports = db;