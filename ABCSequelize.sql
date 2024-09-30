CREATE DATABASE ABCSequelize;
USE ABCSequelize;

CREATE TABLE Alumno (
    idAlumno INT AUTO_INCREMENT PRIMARY KEY, 
    nombreAlumno VARCHAR(100) NOT NULL,
    apellidoPaterno VARCHAR(100) NOT NULL,
    apellidoMaterno VARCHAR(100) NOT NULL
);

CREATE TABLE Carrera (
    nombreCarrera VARCHAR(100) PRIMARY KEY
);

CREATE TABLE AlumnoCarrera (
    idAlumno INT,  
    nombreCarrera VARCHAR(100),    
    PRIMARY KEY (idAlumno, nombreCarrera),
    FOREIGN KEY (idAlumno) REFERENCES Alumno(idAlumno) ON DELETE CASCADE,
    FOREIGN KEY (nombreCarrera) REFERENCES Carrera(nombreCarrera) ON DELETE CASCADE
);
