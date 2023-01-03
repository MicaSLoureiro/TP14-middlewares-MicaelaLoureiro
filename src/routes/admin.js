const express = require('express');
const router = express.Router();

const {list, create, edit, crush} = require('../controllers/adminController');
const adminLogs = require('../middlewares/adminLogs');

router.get('/', adminLogs, list)
router.get('/crearProducto', create)
router.get('/editarProducto', edit)
router.get('/eliminar', crush)

module.exports = router