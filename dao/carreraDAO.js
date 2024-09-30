const Carrera = require('../models/carrera');

// Crear una nueva carrera
async function crearCarrera(nombreCarrera) {
    try {
      const carrera = await Carrera.create({
        nombreCarrera: nombreCarrera,
      });
      console.log(`Carrera ${nombreCarrera} creada exitosamente`);
      return carrera;
    } catch (error) {
      console.error('Error al crear la carrera:', error);
      throw error;
    }
  }
  
  // Obtener todas las carreras
  async function obtenerCarreras() {
    try {
      const carreras = await Carrera.findAll();
      console.log('Carreras encontradas:', carreras);
      return carreras;
    } catch (error) {
      console.error('Error al obtener las carreras:', error);
      throw error;
    }
  }
  
  // Eliminar una carrera por su nombre
  async function eliminarCarrera(nombreCarrera) {
    try {
      const resultado = await Carrera.destroy({
        where: { nombreCarrera: nombreCarrera },
      });
      if (resultado) {
        console.log(`Carrera ${nombreCarrera} eliminada exitosamente`);
      } else {
        console.log(`Carrera ${nombreCarrera} no encontrada`);
      }
      return resultado;
    } catch (error) {
      console.error('Error al eliminar la carrera:', error);
      throw error;
    }
  }
  
  // Actualizar el nombre de una carrera
  async function actualizarNombreCarrera(nombreActual, nuevoNombreCarrera) {
    try {
      const resultado = await Carrera.update(
        { nombreCarrera: nuevoNombreCarrera },
        { where: { nombreCarrera: nombreActual } }
      );
      if (resultado[0] > 0) {
        console.log(`Nombre de la carrera actualizado de ${nombreActual} a ${nuevoNombreCarrera}`);
      } else {
        console.log(`Carrera ${nombreActual} no encontrada`);
      }
      return resultado;
    } catch (error) {
      console.error('Error al actualizar el nombre de la carrera:', error);
      throw error;
    }
  }
  
  module.exports = {
    crearCarrera,
    obtenerCarreras,
    eliminarCarrera,
    actualizarNombreCarrera,
  };