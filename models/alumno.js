const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Alumno extends Model {}

Alumno.init(
  {
    idAlumno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreAlumno: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellidoPaterno: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellidoMaterno: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Alumno',
    tableName: 'Alumno',
    timestamps: false,
  }
);

module.exports = Alumno;
