// cargar variables de entorno
//require('dotenv').config();


const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
  'ABCSequelize',   
  'root',
  'admin',
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, 
  }
);

module.exports = sequelize;
