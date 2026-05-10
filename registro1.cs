const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const port = 3000;


const dbConfig = {
    user: 'tu_usuario',       
    password: 'tu_password',  
    server: 'localhost',      
    database: 'Registro',     
    options: {
        encrypt: false,       
        trustServerCertificate: true
    }
};


app.use(cors()); 
app.use(express.json()); 


app.post('/api/registro', async (req, res) => {
    const { usuario, correo, nombre, edad, password } = req.body;

    
    if (!usuario || !correo || !nombre || !edad || !password) {
        return res.status(400).json({ error: 'Faltan datos en la solicitud' });
    }

    try {
        
        await sql.connect(dbConfig);

        
        const result = await sql.query(`
            INSERT INTO usuarios (usuario, correo, nombre, edad, password)
            VALUES (@usuario, @correo, @nombre, @edad, @password)
        `, {
            usuario,
            correo,
            nombre,
            edad: parseInt(edad),
            password
        });

        res.json({ message: 'Registro guardado con éxito' });
    } catch (err) {
        console.error(err);
        
        if (err.number === 2627) { 
            res.status(409).json({ error: 'El correo ya está registrado' });
        } else {
            res.status(500).json({ error: 'Error en el servidor' });
        }
    } finally {
        sql.close();
    }
});

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});