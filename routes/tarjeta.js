//ASIGNACION DE LAS RUTAS CON SU RESPECTIVO CONTROLADOR

//AREA EN USO: CONTROLLERS.TARJETACONTROLER

const express = require('express');
const router = express.Router();
const tarjetaController = require('../controllers/tarjetaController');

//api/tarjeta
router.post('/', tarjetaController.creaTarjeta);
router.get('/', tarjetaController.obtenerTarjetas);
router.put('/:id', tarjetaController.actualizarTarjeta);
router.get('/:id', tarjetaController.obtenerTarjeta); 
router.delete('/:id', tarjetaController.eliminarTarjeta);

module.exports = router;