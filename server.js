const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { crearAlumno, obtenerAlumnos, agregarAlumnoACarrera, quitarCarreraDeAlumno} = require('./dao/alumnoDAO'); // Asegúrate de tener la ruta correcta
const { crearCarrera, obtenerCarreras } = require('./dao/carreraDAO');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint para agregar un alumno
app.post('/api/alumnos', async (req, res) => {
    const { nombreAlumno, apellidoPaterno, apellidoMaterno } = req.body;
    
    try {
        const nuevoAlumno = await crearAlumno(nombreAlumno, apellidoPaterno, apellidoMaterno);
        res.status(201).json(nuevoAlumno);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el alumno' });
    }
});

// Endpoint para obtener todos los alumnos
app.get('/api/alumnos', async (req, res) => {
    try {
        const alumnos = await obtenerAlumnos();
        res.status(200).json(alumnos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los alumnos' });
    }
});

// Rutas para carreras
app.post('/api/carreras', async (req, res) => {
    const { nombreCarrera } = req.body;
    try {
        const nuevaCarrera = await crearCarrera(nombreCarrera);
        res.status(201).json(nuevaCarrera);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la carrera' });
    }
});

app.get('/api/carreras', async (req, res) => {
    try {
        const carreras = await obtenerCarreras();
        res.json(carreras);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las carreras' });
    }
});

// Rutas para agregar alumno a carrera
app.post('/api/alumno-carrera', async (req, res) => {
    const { idAlumno, nombreCarrera } = req.body;
    try {
        const relacion = await agregarAlumnoACarrera(idAlumno, nombreCarrera);
        res.status(201).json(relacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar alumno a carrera' });
    }
});


app.post('/dar-baja-alumno-carrera', async (req, res) => {
    const { idAlumno, nombreCarrera } = req.body;

    try {
        await quitarCarreraDeAlumno(idAlumno, nombreCarrera);
        res.status(201).json(relacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar alumno a carrera' });
    }
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
