const mongoose = require('mongoose');

// Definir el esquema para un equipo
const equipoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    fechaFundacion: {
        type: Date,
        required: true,
    },
});

// Crear y exportar el modelo
const Equipo = mongoose.model('Equipo', equipoSchema);
module.exports = Equipo;
