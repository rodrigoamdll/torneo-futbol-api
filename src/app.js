const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware para manejar datos en formato JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/torneo-futbol', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Conectado a MongoDB...'))
.catch((err) => console.error('No se pudo conectar a MongoDB...', err));

// Importar la ruta de equipos desde la nueva ubicación
const equipos = require('./rutas/equipos'); // Cambiar a './rutas/equipos'

// Definir la ruta principal para los equipos
app.use('/api/equipos', equipos);

// Iniciar el servidor
const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});
