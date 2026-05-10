
use Registro
go
CREATE TABLE usuarios (
    id INT IDENTITY PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    password VARCHAR(255) NOT NULL,
    fecha_registro DATETIME2 DEFAULT CURRENT_TIMESTAMP
);
