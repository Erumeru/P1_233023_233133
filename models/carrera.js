const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Carrera extends Model {}

Carrera.init(
  {
    nombreCarrera: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Carrera',
    tableName: 'Carrera',
    timestamps: false,
  }
);

module.exports = Carrera;
