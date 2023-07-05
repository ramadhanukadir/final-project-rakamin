const express = require('express');
const router = express.Router();
const warehousesController = require('../controllers/warehousescontrollers');

router.get('/', warehousesController.getAllWarehouses);
router.get('/:id', warehousesController.getWarehousesById);
router.post('/', warehousesController.createWarehouses);
router.delete('/:id', warehousesController.deleteWarehouses);
router.put('/:id', warehousesController.updateWarehouses);

module.exports = router;
