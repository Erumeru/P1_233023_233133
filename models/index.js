const Alumno = require('./alumno');
const Carrera = require('./carrera');

// Relacionar Alumno con Carrera
Carrera.hasMany(Alumno, {
  foreignKey: 'id_carrera',
});

// Relacionar Carrera con Alumno
Alumno.belongsTo(Carrera, {
  foreignKey: 'id_carrera',
});
