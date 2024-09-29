const Alumno = require('../models/alumno');

async function crearAlumno(nombre, apellido_paterno, apellido_materno) {
  await Alumno.create({
    nombre: nombre,
    apellido_paterno: apellido_paterno,
    apellido_materno: apellido_materno,
  });
}
crearAlumno("kim", "serrano", "uribe");
