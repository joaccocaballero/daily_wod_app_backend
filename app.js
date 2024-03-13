require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connecstionString = require()
const cookieParser = require('cookie-parser');
const { getOriginURL } = require('./config/serverConfig'); // Importar la configuración de URL de origen

const app = express();

// // Configuración de CORS con la URL de origen dinámica
// let originURL = getOriginURL();
// app.use(cors({
//     origin: originURL,
//     credentials: true,
//     preflightContinue: false,
// }));

// app.use(cookieParser());
app.use(cors())
app.use(express.json());

// Ruta de comprobación de salud
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Healthy' });
});

module.exports = app; // Exportar la aplicación Express para su uso en server.js
