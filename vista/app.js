// Función para enviar el formulario de agregar alumno
document.getElementById('formAgregarAlumno').addEventListener('submit', async function (event) {
    event.preventDefault(); 
    
    const nombre = document.getElementById('nombreAlumno').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    
    try {
        const response = await fetch('http://localhost:3000/api/alumnos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombreAlumno: nombre,
                apellidoPaterno: apellidoPaterno,
                apellidoMaterno: apellidoMaterno
            }),
        });
        
        if (response.ok) {
            const nuevoAlumno = await response.json();
            console.log('Alumno agregado:', nuevoAlumno);
            document.getElementById('formAgregarAlumno').reset(); 
            await cargarAlumnos(); 
        } else {
            console.error('Error al agregar alumno');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
});

// Función para cargar la lista de alumnos
async function cargarAlumnos() {
    try {
        const response = await fetch('http://localhost:3000/api/alumnos');
        if (response.ok) {
            const alumnos = await response.json();
            const listaAlumnos = document.getElementById('listaAlumnos');
            listaAlumnos.innerHTML = ''; 

            // Agregar cada alumno a la lista
            alumnos.forEach(alumno => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = `${alumno.nombreAlumno} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno}`;
                listaAlumnos.appendChild(li);
            });
        } else {
            console.error('Error al cargar la lista de alumnos');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
}

// Cargar la lista de alumnos al iniciar
cargarAlumnos();

// Función para enviar el formulario de agregar carrera
document.getElementById('formAgregarCarrera').addEventListener('submit', async function (event) {
    event.preventDefault(); 
    const nombreCarrera = document.getElementById('nombreCarrera').value;

    try {
        const response = await fetch('http://localhost:3000/api/carreras', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombreCarrera: nombreCarrera
            }),
        });

        if (response.ok) {
            const nuevaCarrera = await response.json();
            console.log('Carrera agregada:', nuevaCarrera);
            document.getElementById('formAgregarCarrera').reset(); // Limpiar el formulario
            await cargarCarreras(); // Cargar la lista de carreras después de agregar una
        } else {
            console.error('Error al agregar carrera');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
});

// Función para cargar la lista de carreras
async function cargarCarreras() {
    try {
        const response = await fetch('http://localhost:3000/api/carreras');
        if (response.ok) {
            const carreras = await response.json();
            const listaCarreras = document.getElementById('listaCarreras');
            listaCarreras.innerHTML = ''; 

            // Agregar cada carrera a la lista
            carreras.forEach(carrera => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = carrera.nombreCarrera;
                listaCarreras.appendChild(li);
            });
        } else {
            console.error('Error al cargar la lista de carreras');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
}

// Cargar la lista de carreras al iniciar
cargarCarreras();

// Cargar la lista de alumnos en el select
async function cargarSelectAlumnos() {
    try {
        const response = await fetch('http://localhost:3000/api/alumnos');
        if (response.ok) {
            const alumnos = await response.json();
            const selectAlumno = document.getElementById('selectAlumno');
            selectAlumno.innerHTML = ''; 

            // Agregar cada alumno al select
            alumnos.forEach(alumno => {
                const option = document.createElement('option');
                option.value = alumno.idAlumno; 
                option.textContent = `${alumno.nombreAlumno} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno}`;
                selectAlumno.appendChild(option);
            });
        } else {
            console.error('Error al cargar la lista de alumnos');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
}

// Cargar la lista de carreras en el select
async function cargarSelectCarreras() {
    try {
        const response = await fetch('http://localhost:3000/api/carreras');
        if (response.ok) {
            const carreras = await response.json();
            const selectCarrera = document.getElementById('selectCarrera');
            selectCarrera.innerHTML = ''; 

            // Agregar cada carrera al select
            carreras.forEach(carrera => {
                const option = document.createElement('option');
                option.value = carrera.nombreCarrera; 
                option.textContent = carrera.nombreCarrera;
                selectCarrera.appendChild(option);
            });
        } else {
            console.error('Error al cargar la lista de carreras');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
}

// Manejar el formulario para agregar alumno a carrera
document.getElementById('formAgregarAlumnoCarrera').addEventListener('submit', async function (event) {
    event.preventDefault();

    const idAlumno = document.getElementById('selectAlumno').value;
    const nombreCarrera = document.getElementById('selectCarrera').value;

    try {
        const response = await fetch('http://localhost:3000/api/alumno-carrera', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idAlumno: idAlumno,
                nombreCarrera: nombreCarrera
            }),
        });

        if (response.ok) {
            const relacion = await response.json();
            console.log('Alumno agregado a carrera:', relacion);
            document.getElementById('formAgregarAlumnoCarrera').reset(); 
        } else {
            console.error('Error al agregar alumno a carrera');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
});


// Manejar el formulario para quitar alumno a carrera
document.getElementById('formBajaAlumnoCarrera').addEventListener('submit', async function (event) {
    event.preventDefault();

    const idAlumno = document.getElementById('selectBajaAlumno').value;
    const nombreCarrera = document.getElementById('selectBajaCarrera').value;

    try {
        const response = await fetch('http://localhost:3000/dar-baja-alumno-carrera', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idAlumno: idAlumno,
                nombreCarrera: nombreCarrera
            }),
        });

        if (response.ok) {
            const relacion = await response.json();
            console.log('Alumno dado de baja a carrera:', relacion);
            document.getElementById('formBajaAlumnoCarrera').reset();
        } else {
            console.error('Error al dar de baja a alumno a carrera');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
});



// Cargar la lista de alumnos en el select de baja a alaumno s=dde carrera
async function cargarSelectAlumnosBaja() {
    try {
        const response = await fetch('http://localhost:3000/api/alumnos');
        if (response.ok) {
            const alumnos = await response.json();
            const selectAlumno = document.getElementById('selectBajaAlumno');
            selectAlumno.innerHTML = '';

            // Agregar cada alumno al select
            alumnos.forEach(alumno => {
                const option = document.createElement('option');
                option.value = alumno.idAlumno; 
                option.textContent = `${alumno.nombreAlumno} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno}`;
                selectAlumno.appendChild(option);
            });
        } else {
            console.error('Error al cargar la lista de alumnos');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
}

// Cargar la lista de carreras en el select de nbajas de alunmnos a carreras
async function cargarSelectCarrerasBaja() {
    try {
        const response = await fetch('http://localhost:3000/api/carreras');
        if (response.ok) {
            const carreras = await response.json();
            const selectCarrera = document.getElementById('selectBajaCarrera');
            selectCarrera.innerHTML = ''; 

            // Agregar cada carrera al select
            carreras.forEach(carrera => {
                const option = document.createElement('option');
                option.value = carrera.nombreCarrera;
                option.textContent = carrera.nombreCarrera;
                selectCarrera.appendChild(option);
            });
        } else {
            console.error('Error al cargar la lista de carreras');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
}

// Función para enviar el formulario de eliminar carrera
document.getElementById('formEliminarCarrera').addEventListener('submit', async function (event) {
    event.preventDefault(); 
    const nombreCarrera = document.getElementById('nombreCarreraEliminar').value;
    try {
        const response = await fetch('http://localhost:3000/dar-baja-carrera', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombreCarrera: nombreCarrera
            }),
        });

        if (response.ok) {
            const Carrera = await response.json();
            console.log('Carrera eliminada:', Carrera);
            document.getElementById('formEliminarCarrera').reset(); // Limpiar el formulario
            await cargarCarreras(); // Cargar la lista de carreras después de agregar una
        } else {
            console.error('Error al eliminar carrera');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
});

// Función para enviar el formulario de eliminar alumno
document.getElementById('formEliminarAlumno').addEventListener('submit', async function (event) {
    event.preventDefault(); 
    const idAlumno = document.getElementById('idAlumnoEliminar').value;
    try {
        const response = await fetch('http://localhost:3000/dar-baja-alumno', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idAlumno: idAlumno
            }),
        });

        if (response.ok) {
            const alumno = await response.json();
            console.log('Alumno elminado:', alumno);
            document.getElementById('formEliminarAlumno').reset(); // Limpiar el formulario
            await cargarCarreras(); // Cargar la lista de carreras después de agregar una
        } else {
            console.error('Error al eliminar carrera');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
});

// Función para enviar el formulario de eliminar carrera
document.getElementById('formEliminarCarrera').addEventListener('submit', async function (event) {
    event.preventDefault(); 
    const nombreCarrera = document.getElementById('nombreCarreraEliminar').value;
    try {
        const response = await fetch('http://localhost:3000/dar-baja-carrera', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombreCarrera: nombreCarrera
            }),
        });

        if (response.ok) {
            const Carrera = await response.json();
            console.log('Carrera eliminada:', Carrera);
            document.getElementById('formEliminarCarrera').reset(); // Limpiar el formulario
            await cargarCarreras(); // Cargar la lista de carreras después de agregar una
        } else {
            console.error('Error al eliminar carrera');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
});

// Función para enviar el formulario de actualizar alumno
document.getElementById('formActualizarAlumno').addEventListener('submit', async function (event) {
    event.preventDefault(); 
    const id = document.getElementById('idAlumnoActualizar').value;
    const nombreAlumnoNuevo = document.getElementById('nombreAlumnoNuevo').value;

    try {
        const response = await fetch('http://localhost:3000/actualizar-alumno', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                nombreAlumnoNuevo: nombreAlumnoNuevo
            }),
        });

        if (response.ok) {
            const alumno = await response.json();
            console.log('Alumno actualizado:', alumno);
            document.getElementById('formActualizarAlumno').reset(); // Limpiar el formulario
            await cargarAlumnos(); // Cargar la lista de alumnos después
        } else {
            console.error('Error al actualizar alumno');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
});

// Función para enviar el formulario de actualizar carrera
document.getElementById('formActualizarCarrera').addEventListener('submit', async function (event) {
    event.preventDefault(); 
    const nombreCarreraViejo = document.getElementById('nombreCarreraActualizar').value;
    const nombreCarreraNuevo = document.getElementById('nombreCarreraNuevo').value;

    try {
        const response = await fetch('http://localhost:3000/actualizar-carrera', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombreCarreraViejo: nombreCarreraViejo,
                nombreCarreraNuevo: nombreCarreraNuevo
            }),
        });

        if (response.ok) {
            const carrera = await response.json();
            console.log('Carrera actualizado:', carrera);
            document.getElementById('formActualizarCarrera').reset(); // Limpiar el formulario
            await cargarCarreras(); // Cargar la lista de carrera después
        } else {
            console.error('Error al actualizar carrera');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
});
// Llamar a las funciones de carga al iniciar
cargarSelectAlumnos();
cargarSelectCarreras();
cargarSelectAlumnosBaja();
cargarSelectCarrerasBaja();