const Alumno = require('../models/alumno');

async function crearAlumno(nombreAlumno, apellidoPaterno, apellidoMaterno) {
  try {
    // Crear un nuevo alumno en la base de datos
    const nuevoAlumno = await Alumno.create({
      nombreAlumno: nombreAlumno,
      apellidoPaterno: apellidoPaterno,
      apellidoMaterno: apellidoMaterno,
    });
    console.log('Alumno creado exitosamente:', nuevoAlumno);
    return nuevoAlumno; // Retornar el objeto creado
  } catch (error) {
    console.error('Error al crear el alumno:', error);
    throw error; // Lanzar error si algo sale mal
  }
}

// Obtener todos los alumnos
async function obtenerAlumnos() {
  try {
    const alumnos = await Alumno.findAll();
    console.log('Alumnos encontrados:', alumnos);
    return alumnos;
  } catch (error) {
    console.error('Error al obtener los alumnos:', error);
    throw error;
  }
}

// Eliminar un alumno por su ID
async function eliminarAlumno(idAlumno) {
  try {
    const resultado = await Alumno.destroy({
      where: { idAlumno: idAlumno },
    });
    if (resultado) {
      console.log(`Alumno con ID ${idAlumno} eliminado exitosamente`);
    } else {
      console.log(`Alumno con ID ${idAlumno} no encontrado`);
    }
    return resultado;
  } catch (error) {
    console.error('Error al eliminar el alumno:', error);
    throw error;
  }
}

// Agregar un alumno a una carrera en la tabla AlumnoCarrera
async function agregarAlumnoACarrera(idAlumno, nombreCarrera) {
  try {
    const relacion = await AlumnoCarrera.create({
      idAlumno: idAlumno,
      nombreCarrera: nombreCarrera,
    });
    console.log(`Alumno ${idAlumno} agregado a la carrera ${nombreCarrera}`);
    return relacion;
  } catch (error) {
    console.error('Error al agregar alumno a la carrera:', error);
    throw error;
  }
}

// Actualizar el nombre de un alumno
async function actualizarNombreAlumno(idAlumno, nuevoNombreAlumno) {
  try {
    const resultado = await Alumno.update(
      { nombreAlumno: nuevoNombreAlumno },
      { where: { idAlumno: idAlumno } }
    );
    if (resultado[0] > 0) {
      console.log(`Nombre del alumno con ID ${idAlumno} actualizado a ${nuevoNombreAlumno}`);
    } else {
      console.log(`Alumno con ID ${idAlumno} no encontrado`);
    }
    return resultado;
  } catch (error) {
    console.error('Error al actualizar el nombre del alumno:', error);
    throw error;
  }
}

// Dar de baja a alumno de carrera
async function quitarCarreraDeAlumno(idAlumno, nombreCarrera) {
  try {
      await AlumnoCarrera.destroy({
          where: {
              idAlumno: idAlumno,
              nombreCarrera: nombreCarrera
          }
      });
      console.log(`Carrera ${nombreCarrera} quitada al alumno con ID ${idAlumno}`);
  } catch (error) {
      console.error('Error al quitar carrera de alumno:', error);
  }
}


 module.exports = {
  crearAlumno,
  obtenerAlumnos,
  eliminarAlumno,
  agregarAlumnoACarrera,
  actualizarNombreAlumno,
  quitarCarreraDeAlumno
};