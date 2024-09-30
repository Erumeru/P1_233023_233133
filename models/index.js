const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Alumno = require('./alumno');
const Carrera = require('./carrera');

class AlumnoCarrera extends Model {}

AlumnoCarrera.init(
  {
    idAlumno: {
      type: DataTypes.INTEGER,
      references: {
        model: Alumno,
        key: 'idAlumno',
      },
      primaryKey: true,
    },
    nombreCarrera: {
      type: DataTypes.STRING(100),
      references: {
        model: Carrera,
        key: 'nombreCarrera',
      },
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: 'AlumnoCarrera',
    tableName: 'AlumnoCarrera',
    timestamps: false,
  }
);

// Establecer las relaciones
Alumno.belongsToMany(Carrera, { through: AlumnoCarrera, foreignKey: 'idAlumno' });
Carrera.belongsToMany(Alumno, { through: AlumnoCarrera, foreignKey: 'nombreCarrera' });

module.exports = AlumnoCarrera;
