const express = require('express');
const router = express.Router();
const Equipo = require('../modelos/equipo'); // Cambiar a '../modelos/equipo'

// Crear un nuevo equipo
router.post('/', async (req, res) => {
    const { nombre, ciudad, fechaFundacion } = req.body;

    const nuevoEquipo = new Equipo({ nombre, ciudad, fechaFundacion });

    try {
        const equipoGuardado = await nuevoEquipo.save();
        res.status(201).json(equipoGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener todos los equipos
router.get('/', async (req, res) => {
    try {
        const equipos = await Equipo.find();
        res.status(200).json(equipos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un equipo por ID
router.get('/:id', async (req, res) => {
    try {
        const equipo = await Equipo.findById(req.params.id);
        if (!equipo) {
            return res.status(404).json({ message: 'Equipo no encontrado' });
        }
        res.status(200).json(equipo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar un equipo
router.put('/:id', async (req, res) => {
    try {
        const equipoActualizado = await Equipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!equipoActualizado) {
            return res.status(404).json({ message: 'Equipo no encontrado' });
        }
        res.status(200).json(equipoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un equipo
router.delete('/:id', async (req, res) => {
    try {
        const equipoEliminado = await Equipo.findByIdAndDelete(req.params.id);
        if (!equipoEliminado) {
            return res.status(404).json({ message: 'Equipo no encontrado' });
        }
        res.status(200).json({ message: 'Equipo eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
