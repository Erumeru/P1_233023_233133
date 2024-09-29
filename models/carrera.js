const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Carrera extends Model {}

Carrera.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Carrera',
    tableName: 'carreras',
    timestamps: false,
  }
);

module.exports = Carrera;
