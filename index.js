require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');
// Crear el servidor express
const app = express();

// Configurar CORS
app.use(cors());

// Base de datos
dbConnection();

// Para ver todas las variables de entorno, que podemos usar en el fichero .env
//console.log(process.env);

// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Noe'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});