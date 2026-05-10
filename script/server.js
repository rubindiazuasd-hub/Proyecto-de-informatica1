const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

const db = new sqlite3.Database('usuarios.db');


db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario TEXT NOT NULL,
            correo TEXT NOT NULL,
            nombre TEXT NOT NULL,
            edad INTEGER NOT NULL,
            password TEXT NOT NULL
        )
    `);
});

// Middleware para parsear JSON
app.use(bodyParser.json());

// Servir archivos estáticos (como tu HTML, CSS, JS)
app.use(express.static(__dirname));

// Endpoint para registrar usuarios
app.post('/api/registro', (req, res) => {
    const { usuario, correo, nombre, edad, password } = req.body;

    const stmt = db.prepare(`INSERT INTO usuarios (usuario, correo, nombre, edad, password) VALUES (?, ?, ?, ?, ?)`);
    stmt.run(usuario, correo, nombre, edad, password, function(err) {
        if (err) {
            res.status(500).json({ message: 'Error al guardar en la base de datos' });
        } else {
            res.json({ message: 'Registro guardado correctamente' });
        }
    });
    stmt.finalize();
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});