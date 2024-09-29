const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Alumno extends Model {}

Alumno.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellido_paterno: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellido_materno: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    id_carrera: {
      type: DataTypes.INTEGER,
      references: {
        model: 'carreras',
        key: 'id',
      },
    },
  },
  {
    sequelize, 
    modelName: 'Alumno',  
    tableName: 'alumnos',
    timestamps: false, 
  }
);

module.exports = Alumno;
